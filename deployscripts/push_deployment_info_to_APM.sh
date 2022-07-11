#!/bin/bash

. $(dirname $0)/common_functions.sh

# the TARGET_DIR is defined in common_functions.sh
cd $TARGET_DIR

# det which env this instance is deploying into by getting it from the AWS EC2's metadata
# NOTE: awscli was installed via pip in Launch Config's User Data field or pre-installed in AMI
#       jq was pre-installed in AMI
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
AWS_REGION=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/placement/region)
EC2_ID=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/instance-id)

FINIX_ENV=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
            --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=Env" \
            | cut -f5)

FINIX_NEWRELIC_ENABLED=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
                         --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=NewRelic_Agent_Enabled" \
                         | cut -f5)

# if the service has the NewRelic Agent enabled
#   read the contents of the file with Github info of the build that was deployed into an array
#   create change long to have repo name, branch name, and last commit comment
#   record the deployment details to NewRelic
if [ "$FINIX_NEWRELIC_ENABLED" == 'true' ]; then
    readarray -t a < .version
    NEWRELIC_CHANGE_LOG="repo: ${a[0]} | branch: ${a[2]} | ${a[4]}"
    echo $NEWRELIC_CHANGE_LOG | java -jar /opt/newrelic/newrelic.jar deployment --environment=$FINIX_ENV --revision=${a[1]} --changes
    msg "Post deployment info to APM"
fi
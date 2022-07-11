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

FINIX_INCLUDE_PROFILES=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
                         --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=Spring_Include_Profiles" \
                         | cut -f5)

FINIX_JVM_MAX_HEAP=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
                     --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=JVM_Max_Heap" \
                     | cut -f5)

FINIX_NEWRELIC_ENABLED=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
                         --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=NewRelic_Agent_Enabled" \
                         | cut -f5)

FINIX_ACTIVE_PROFILES_ADDONS=$(aws --region ${AWS_REGION} ec2 describe-tags --output text \
                               --filters "Name=resource-id,Values=${EC2_ID}" "Name=key,Values=Spring_Active_Profiles_Addons" \
                               | cut -f5)

echo "Env is: $FINIX_ENV | Spring Incl Profiles is: $FINIX_INCLUDE_PROFILES | JVM Max Heap is: $FINIX_JVM_MAX_HEAP"
echo "NewRelic is: $FINIX_NEWRELIC_ENABLED | Spring Active Profiles Addons: $FINIX_ACTIVE_PROFILES_ADDONS"

# get the app name, stripping out dir & suffix in the name
# get the service name (minus .jar suffix)
FILENAME=$(basename *.jar)
SERVICE="${FILENAME%.*}"
DEPLOY_VERSION=$(echo $SERVICE | cut -d'-' -f 3)

msg "Checking java process is up or not"
pid=`pidof java`

if [ "$pid" ]; then
  kill -9 "$pid"
  msg "Killed previously running java before starting new process"
fi

msg "Starting $SERVICE with version $DEPLOY_VERSION"

# Starting long-running services in the background will leave Codedeploy in
# a pending state (up to max 1hr timeout).  After which Codedeploy will then
# stop & fail the deployment.  MUST redirect stdin, stdout & stderr to /dev/null!
#
java -Xmx$FINIX_JVM_MAX_HEAP \
     -Dspring.profiles.active=$FINIX_ENV \
     -Dspring.profiles.include=$FINIX_INCLUDE_PROFILES \
     -Dspring.config.additional-location=file:/etc/config/secrets.yml \
     -Dnewrelic.environment=$FINIX_ENV \
     -Dnewrelic.config.agent_enabled=$FINIX_NEWRELIC_ENABLED \
     -javaagent:/opt/newrelic/newrelic.jar \
     -XX:+CrashOnOutOfMemoryError \
     -XX:+HeapDumpOnOutOfMemoryError \
     -XX:OnError="cat hs_err_pid%p.log >> /var/log/finix/app.log" \
     -jar $FILENAME > /dev/null 2>&1 <&1 &


if [ $? == 0 ]; then
    msg "Successfully started $SERVICE"
    exit $?
else
    error_exit "Failed starting $SERVICE"
fi

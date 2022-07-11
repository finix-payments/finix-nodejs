#!/bin/bash
#
# To use AWS Codedeploy to deploy revisions to instances via ASG, we need to:
#
# 1) check if the dir the revision bundle will be deployed into exist,
# 2) if YES, then continue on with the rest of the deployment,
# 3) if NO, then sleep for a bit, loop & check 1) again
#
# When ASG spins up new instances via an AMI, there is still an init script
# that runs to setup login keys, env var, dirs where app will be deployed, etc.
# There is no way to control when Codedeploy Lifecycle hooks will run relative
# to when ASG Lifecycle hooks will run.  Therefore, this script blocks until
# we're confident the init script has completed.
#
# NOTE: this script does *NOT* loop infitely, because the 'timeout' set in
# the appspec.yml file will limit how long it can run.

. $(dirname $0)/common_functions.sh

msg "Running AWS CLI with region: $(get_instance_region)"

# Get current time
msg "Started $(basename $0) at $(/bin/date "+%F %T")"
start_sec=$(/bin/date +%s.%N)


msg "Check if $TARGET_DIR exist"

while :
do
	if [ -d "$TARGET_DIR" ]; then
    	msg "$TARGET_DIR dir does exist"
    	break
    fi

    msg "Sleeping...."
    sleep 10
done

msg "Finished $(basename $0) at $(/bin/date "+%F %T")"

end_sec=$(/bin/date +%s.%N)
elapsed_seconds=$(echo "$end_sec - $start_sec" | /usr/bin/bc)

msg "Elapsed time: $elapsed_seconds"

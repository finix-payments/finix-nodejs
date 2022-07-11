#!/bin/bash
#
# To use AWS Codedeploy to manually deploy revisions to instances, we need to:
#
# 1) check if /opt/codedeploy-agent/deployment-root/deployment-instructions/'deployment-group-ID'-cleanup file exist,
# 2) if YES, then do nothing as Codedeploy will use it to remove all the files from the previous deploy,
#	         delete deploy.log file as it's created by the setup_target_dir.sh script (AfterInstall)
# 3) if NO, then delete everything in the target dir
#
# This is because Codedeploy uses the *-cleanup file to det what objects from
# the previous deploy to delete before installing the objects from the current
# deploy.  If the *-cleanup file does NOT exist, when the appspec.yml 'files:'
# section tries to install the current deploy's objects it'll fail as Codedeploy
# doesn't allow overwriting existing files.  The *-cleanup file will NOT exist
# the very 1st time we use Codedeploy to manually deploy a revision.
#
# The *-cleanup file does NOT remove files created by apps or Codedeploy hook scripts.
#

. $(dirname $0)/common_functions.sh

msg "Running AWS CLI with region: $(get_instance_region)"

# Get current time
msg "Started $(basename $0) at $(/bin/date "+%F %T")"
start_sec=$(/bin/date +%s.%N)


msg "Check if ${DEPLOYMENT_GROUP_ID}-cleanup file exist"
CLEANUP_FILE="/opt/codedeploy-agent/deployment-root/deployment-instructions/${DEPLOYMENT_GROUP_ID}-cleanup"

cd $TARGET_DIR            # the TARGET_DIR is defined in common_functions.sh

if [ -f "$CLEANUP_FILE" ]; then
    msg "Cleanup file does exist"
    msg "Delete $DEPLOY_LOG file"
    rm -f $DEPLOY_LOG     # the DEPLOY_LOG is defined in common_functions.sh
else
    msg "Cleanup file does not exist, deleting existing objects in target dir"
    rm -rf ..?* .[!.]* *  # don't delete .. & . files, delete everything else (hidden & non-hidden)
fi


msg "Finished $(basename $0) at $(/bin/date "+%F %T")"

end_sec=$(/bin/date +%s.%N)
elapsed_seconds=$(echo "$end_sec - $start_sec" | /usr/bin/bc)

msg "Elapsed time: $elapsed_seconds"

#!/bin/bash

. $(dirname $0)/common_functions.sh


# the TARGET_DIR & DEPLOY_LOG is defined in common_functions.sh
cd $TARGET_DIR

# get the app name, stripping out dir paths in the name
FILENAME=$(basename *.jar)

msg "Determine if $FILENAME is running"

tail -f /var/log/finix/app.log | while read LOGLINE
do
  msg "${LOGLINE}"
  [[ "${LOGLINE}" == *"JVM running"* ]] && pkill -f tail
done
sleep 10
# check all processes' full command line to match against:
# <start of cmd>java ........... $FILENAME<end of cmd>
#
# pgrep returns the PID if a match is found, so redirect
# stdout to /dev/null to not print to terminal
#
pgrep -f java.*$FILENAME$ > /dev/null


if [ $? == 0 ]; then
    msg "$FILENAME is running"
    exit $?
else
    error_exit "$FILENAME is not running"
fi

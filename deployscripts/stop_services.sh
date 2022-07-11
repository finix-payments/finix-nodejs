#!/bin/bash

. $(dirname $0)/common_functions.sh

# the TARGET_DIR & DEPLOY_LOG is defined in common_functions.sh
cd $TARGET_DIR
CURRENT_VERSION=$(grep -Po "(?<=^version ).*" $DEPLOY_LOG)

# get the app name, stripping out dir paths in the name
# get the service name (minus .jar suffix)
FILENAME=$(basename *.jar)
SERVICE="${FILENAME%.*}"
STOP_TOMEOUT="10m"

# if there are NO *.jar files then take no further actions
if [[ "$SERVICE" == '*' ]]; then
    msg "No jar file installed"
    msg "Don't need to stop any service"
    exit $?
fi


msg "Stopping $SERVICE with version $CURRENT_VERSION"

# check all processes' full command line to match against:
# <start of cmd>java ........... $FILENAME<end of cmd>
#
# pgrep returns the PID if a match is found, so redirect
# stdout to /dev/null to not print to terminal
#
pkill -15 -f java.*$FILENAME$ > /dev/null

pid=`pidof java`

if [ "$pid" ]; then
   msg "Waiting for $SERVICE to stop with timeout $STOP_TOMEOUT"
   export pid=$pid
   timeout $STOP_TOMEOUT bash -c 'while kill -0 "$pid"; do sleep .5; done'
   if [ $? == "124" ]; then
       msg "Killed java process $pid due to timeout"
       kill -9 $pid
   fi
   exit 0
else
    msg "No $SERVICE process running"
    exit 0
fi


#if [ $? == 0 ]; then
#    msg "Successfully stopped $SERVICE"
#    exit $?
#elif [ $? == 1 ]; then
#    msg "No $SERVICE process running"
#    exit $?
#else
#    error_exit "Failed stopping $SERVICE"
#fi

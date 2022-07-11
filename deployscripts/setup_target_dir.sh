#!/bin/bash

. $(dirname $0)/common_functions.sh

# the TARGET_DIR & DEPLOY_LOG is defined in common_functions.sh
cd $TARGET_DIR

# get the app name, stripping out dir & suffix in the name
# get the service name (minus .jar suffix)
FILENAME=$(basename *.jar)
SERVICE="${FILENAME%.*}"

msg "Writing info to $DEPLOY_LOG"

DEPLOY_VERSION=$(echo $SERVICE | cut -d'-' -f 3)
echo "deploy version is: $DEPLOY_VERSION"

touch $DEPLOY_LOG
echo "version $DEPLOY_VERSION" >> $DEPLOY_LOG
echo "date" $(date +%Y-%m-%d:%H:%M:%S) >> $DEPLOY_LOG

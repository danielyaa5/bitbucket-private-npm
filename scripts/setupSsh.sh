#!/bin/bash

echo "Setting up ssh for private modules..."

if [ -f ~/.ssh/flightfutures-bitbucket ]; then

  if [ -f ~/.ssh/config ]; then
    cat ~/.ssh/config > ~/.ssh/config_temp
  fi

  # Setup the ssh config file.
  # Switch out the hostname for different hosts.
  echo -e "Host bitbucket.org\n"\
          " IdentityFile ~/.ssh/flightfutures-bitbucket\n"\
          " IdentitiesOnly yes\n"\
          " UserKnownHostsFile=/dev/null\n"\
          " StrictHostKeyChecking no"\
          > ~/.ssh/config
else
    bash ./createSshKeys.sh
fi

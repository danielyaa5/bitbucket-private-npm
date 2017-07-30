#!/bin/bash

ssh_root=~/.ssh
ssh_file="$ssh_root/$1-bitbucket"
if [ -f $ssh_file ]; then
  echo "Setting up ssh for private modules..."

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
    echo "No SSH keys for bitbucket found let's create some..."
    bash ./createSshKeys.sh
fi

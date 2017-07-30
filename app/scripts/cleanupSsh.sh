#!/bin/bash
echo "" >&1

ssh_root=~/.ssh
ssh_file="$ssh_root/$1-bitbucket"
if [ ! -f $ssh_file ]; then
    echo "No bitbucket ssh keys found for project, $1, let's create some..."
    echo ""
    bash ./createSshKeys.sh
else
    echo "Cleaning up SSH config..." >&1
fi

# Now that npm has finished running,
# we shouldn't need the ssh key/config anymore.
# Remove the files that we created.
if [ -f ~/.ssh/config_temp ]; then
  cat ~/.ssh/config_temp > ~/.ssh/config
else
  rm -f ~/.ssh/config
fi

rm -f ~/.ssh/config_temp

#!/bin/bash
echo "Cleaning up SSH config..." >&1
echo "" >&1

# Now that npm has finished running,
# we shouldn't need the ssh key/config anymore.
# Remove the files that we created.
if [ -f ~/.ssh/config_temp ]; then
  cat ~/.ssh/config_temp > ~/.ssh/config
else
  rm -f ~/.ssh/config
fi

rm -f ~/.ssh/config_temp


#!/usr/bin/env bash

ssh_root=~/.ssh
ssh_file="$ssh_root/$1-bitbucket"
ssh_file_pub=~/.ssh/flightfutures-bitbucket.pub

if [ -f $ssh_file ]; then
    echo "You already have flightfutures-bitbucket key in ~/.ssh folder"
else
    # Ensure we have the ssh folder
    if [ ! -d ~/.ssh ]; then
        mkdir -p ~/.ssh
        chmod 700 ~/.ssh
    fi

    echo "Enter the email associated with you bitbucket account"
    read email
    # Create keys in ~/.ssh and pipe printf to cancel passphrase prompt
    printf "" | ssh-keygen -C $email -f $ssh_file
    # Copy pub key to clipboard
    cat $ssh_file_pub | pbcopy

    open https://bitbucket.org/flightfutures/flightfutures-config/admin/access-keys/ || :

    echo "\n\n
    flightfutures-bitbucket keys created in .ssh folder,
    now go to https://bitbucket.org/flightfutures/flightfutures-config/admin/access-keys/,
    then paste your public key. The public key has been added to your clipboard already so simply paste the new key."
fi

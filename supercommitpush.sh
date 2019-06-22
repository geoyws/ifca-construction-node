#!/bin/bash -e

if [ -z $1 ]; then
    echo "You need to provide a commit message. Try again."
fi

# this basically commits and pushes everything to save us time

. supercommit.sh "$1"
. superpush.sh

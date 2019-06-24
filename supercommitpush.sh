#!/bin/bash -e

if [ -z $1 ]; then
    echo "You need to provide a commit message. Try again."
fi

# commit and push everything

. supercommit.sh "$1"
. superpush.sh

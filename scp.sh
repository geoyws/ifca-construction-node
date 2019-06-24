#!/bin/bash -e

# supercommitpush

if [ -z $1 ]; then
    echo "You need to provide a commit message. Try again."
fi

. sc.sh "$1"
. sp.sh

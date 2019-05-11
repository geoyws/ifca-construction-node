#!/bin/bash -e
if [ -z $1 ]; then
    echo "You need to provide a commit message."
    exit
fi

git submodule foreach git add .
git submodule foreach git commit -m "$1"

git add .
git commit -m "$1"
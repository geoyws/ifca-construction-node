#!/bin/bash -e
if [ -z $1 ]; then
    echo "You need to provide a commit message. Try again."
fi

git submodule foreach git add -A .
git submodule foreach git commit -m "$1"

git add -A .
git commit -m "$1"

git push --recurse-submodules=on-demand
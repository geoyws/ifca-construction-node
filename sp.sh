#!/bin/bash -e

# superpush

git push origin master
git push ifca master

cd src/modules/ifca-node-core
git push origin master

cd ../ifca-schemer
git push origin master

cd ../../../

#!/bin/bash -e

git push origin master

cd src/modules/ifca-node-core
git push origin master

cd ../ifca-schemer
git push origin master

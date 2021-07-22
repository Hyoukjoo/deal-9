#!/bin/bash

chmod 755 scripts/prepare.sh

mkdir -p dist/public/icons
mkdir -p dist/public/images

cp -r public/icons/ dist/public/icons/
cp -r public/images/ dist/public/images/
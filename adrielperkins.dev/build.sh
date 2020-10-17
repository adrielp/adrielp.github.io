#!/bin/sh
pushd ~/Development/repos/apdev-hugo/adrielperkins.dev
hugo -e production --minify --cleanDestinationDir

exit 0

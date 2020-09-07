#!/bin/sh
USER=adriel
HOST=142.11.236.177
DIR=adrielperkins.dev/

hugo && rsync -avz --delete public / ${USER}@${HOST}:~/${DIR}

exit 0
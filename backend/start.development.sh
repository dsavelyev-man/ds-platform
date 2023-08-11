#!/bin/sh

sh wait-for-postgres.sh && node ./node_modules/@nestjs/cli/bin/nest start $PROJECT --watch

#!/bin/sh

sh wait-for-postgres.sh && node ./dist/apps/$PROJECT/main

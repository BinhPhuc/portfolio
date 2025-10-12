#!/bin/sh
set -e

echo "Waiting for database on postgres:5432..."
i=0
until nc -z postgres 5432 >/dev/null 2>&1; do
  i=$((i+1)); [ $i -gt 30 ] && echo "DB not reachable" && exit 1
  sleep 2
done

npx prisma migrate deploy

echo "Starting app..."
node server.js

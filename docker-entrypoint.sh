#! /bin/sh
node /app/http.js &
node /app/socket.js &

exec "$@"
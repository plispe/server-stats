#! /bin/sh
node /app/http.js &
node /app/socket.js &
node /app/react-hotreload.js &
exec "$@"
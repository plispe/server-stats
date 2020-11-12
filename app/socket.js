'use strict';

const { createServer } = require('http')

const WebSocket = require('ws')

const server = createServer()
const wss = new WebSocket.Server({ server })
const {SOCKET_SERVER_PORT: port = 3001} = process.env

wss.on('connection', (ws) => {
  const id = setInterval(() => {
    ws.send(JSON.stringify(process.memoryUsage()), () => {
      //
      // Ignore errors.
      //
    });
  }, 100)
  console.log('started client interval')

  ws.on('close', () => {
    console.log('stopping client interval')
    clearInterval(id)
  })
})

server.listen(port, () => {
  console.log(`Websocket server listening on http://localhost:${port}`)
})

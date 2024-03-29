const WebSocket = require('ws') ;
const server = new WebSocket.Server({port: 65532});

server.on('connection', ws => {
  ws.on('message', message => {
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN  ) {
        client.send(message)
      }
    })
  });
  ws.send('hi')
});

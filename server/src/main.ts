import * as WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 9090 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  setInterval(() => {
    const data = {
      setSomeval: Math.floor(Math.random() * 100),
      'testmod1/setValmod1': new Date().toString(),
      'testmod2/switchBool': null,
    };
    ws.send(JSON.stringify(data));
  }, 2000);
});

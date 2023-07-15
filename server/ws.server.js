var WebSocketServer = new require('ws');

// подключённые клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});
webSocketServer.on('connection', function(ws) {
  var id = Math.random();
  var intervalId;

  clients[id] = ws;

  ws.on('message', function(message) {
    if (message.toString() === 'on') {
      var counter = 0;

      intervalId = setInterval(() => {
        for (var key in clients) {
          clients[key].send(counter++);
        }
      }, 1000);

      return;
    }

    if (message.toString() === 'off') {
      clearInterval(intervalId);
      
      return;
    }
  });

  ws.on('close', function() {
    delete clients[id];
  });

});
const express = require('express');
const { listen } = require('socket.io');
const app = express();
const server = require('socket.io').ceateServer(app);
const io = require('socket.io')(server);

users = [];
connection = [];
server.listen(3000);
app.get('/', function (req, resp) {
  resp.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
  connections.push(socket);
  console.log('connected: %s socket connected', connections.length);
  socket.on('disconnect', function(data) {
    
    
    }
  });

  // メッセージ送信時の処理
  socket.on('send message', (data) => {
    // メッセージを受信したユーザーに送信
    io.emit('new message', {
      username: socket.username,
      message: data,
    });
  });


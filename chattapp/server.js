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

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーがポート ${port} で稼働しています`);
});

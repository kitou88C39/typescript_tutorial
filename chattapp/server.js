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

  socket.on('new user', (data) => {
    // 同じ名前のユーザーがいないか確認
    if (users.indexOf(data) > -1) {
      socket.emit('userExists', data + ' は既に存在します。');
    } else {
      // ユーザー名をリストに追加
      users.push(data);
      // 接続にユーザー名を関連付ける
      socket.username = data;
      // 接続者にユーザーリストを送信
      updateUserList();
      // 接続者に接続通知を送信
      socket.emit('userAdded', data);
      // 全員に新しいユーザーが参加したことを通知
      socket.broadcast.emit('userJoined', data);
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

  // ユーザーが切断した時の処理
  socket.on('disconnect', () => {
    console.log('切断:', socket.id);

    // ユーザー名をリストから削除
    if (socket.username) {
      users.splice(users.indexOf(socket.username), 1);
      // 全員にユーザーが切断したことを通知
      socket.broadcast.emit('userLeft', socket.username);
    }

    // 接続をリストから削除
    connections.splice(connections.indexOf(socket), 1);

    // ユーザーリストを更新
    updateUserList();
  });

  // ユーザーリストを更新する関数
  function updateUserList() {
    io.emit('user list', users);
  }
});

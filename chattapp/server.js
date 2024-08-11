const express = require('express');
const { listen } = require('socket.io');
const app = express();
const server = require('socket.io').ceateServer(app);
const io = require('socket.io')(server);

// ミドルウェア
app.use(express.json()); // JSONリクエストの解析を有効にする

// ルート
app.get('/', (req, res) => {
  res.send('Express サーバーが起動しました！');
});

// POST エンドポイント
app.post('/data', (req, res) => {
  const data = req.body;
  console.log('受信したデータ:', data);
  res.send('データを受信しました！');
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーがポート ${port} で稼働しています`);
});

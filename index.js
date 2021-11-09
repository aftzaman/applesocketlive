// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// io.on('connection', (socket) => {
// 	console.log('a user connected');
//   });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });


// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
// console.log('a user connected');
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
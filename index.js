// 'use strict';

// const express = require('express');
// const socketIO = require('socket.io');

// const PORT = process.env.PORT || 3000;
// const INDEX = 'views/home.html';

// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

var port = process.env.PORT || 3000;

var router = express.Router();
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const server = app.listen(port, () => {
    console.log('listening on *: ' + port);
});

console.log('Magic happens on port ' + port);

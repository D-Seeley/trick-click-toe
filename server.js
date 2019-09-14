const express = require('express');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);
const socketHandler = require('./utils/socketHandlerServer')

const path = require('path');
const port = process.env.PORT || 1337;

//Static an API Routing
app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res, next)=> res.sendfile(path.join(__dirname, 'public', 'index.htm')));

//Socket.Io connection handler
io.on('connection', socket => socketHandler(socket, io));


server.listen(port);
console.log("Listening on ", port);
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// const ExpressPeerServer = require('peer').ExpressPeerServer;
const path = require('path');
const port = process.env.port || 1337;

//Static an API Routing
app.use(express.static(path.join(__dirname, './public')));

io.on('connection', (socket)=> {
    console.log(`${socket.id} joined socket.io`);
    socket.emit('iJoined', socket.id)
    socket.broadcast.emit('peerJoined', socket.id);

    socket.on('move', (board)=> {
      io.emit('move', board)
    })

    socket.on('disconnect', function () {
        io.emit('disconnected', socket.id)
        console.log('Goodbye, ', socket.id, ' :(');
      });
});




server.listen(port);
console.log("Listening on ", port);
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// const ExpressPeerServer = require('peer').ExpressPeerServer;
const path = require('path');
const port = process.env.port || 1337;

//Static an API Routing
app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res, next)=> res.sendfile(path.join(__dirname, 'public', 'index.htm')));

//Controle players

let 
  playerOne, 
  playerTwo, 
  game = true,
  initialBoard = [0,0,0,0,0,0,0,0,0],
  serverBoard = initialBoard;

let users = [];

const addUser = (id) => {
  let user = {
    id,
    playerOne: false,
    playerTwo: false
  }

  if (!users.find(_user => _user.playerOne == true)) {
    console.log('there is no playerOne')
    user.playerOne = true;
    playerOne = user;
  } else if (!playerTwo) {
    user.playerTwo = true;
    playerTwo = user;
  } else {
    user.playerOne = false;
    user.playerTwo = false;
  }

  users.push(user);

  console.log(`
    Player One is: ${playerOne}
    Player Two is: ${playerTwo}
  `)
}

const reset = () => {
  game = true;
  serverBoard = initialBoard;
}

io.on('connection', (socket)=> {
    const { id } = socket;
    console.log(`${socket.id} joined socket.io`);
    addUser(id);
    socket.emit('joined', {users, id, serverBoard})
    socket.broadcast.emit('peerJoined', users);

    socket.on('gameStatus', (status)=> {
      game = status;
      io.emit('gameStatus', game);
    })

    socket.on('resetGame', ()=> {
      game = true;
      serverBoard = initialBoard;
      io.emit('gameStatus', true)
      io.emit('move', serverBoard);
      // socket.emit('move', serverBoard);
    })

    socket.on('gameOver', ()=> {
      game = false;
      socket.broadcast.emit('gameOver');
      socket.emit('gameOver');
      // reset();
      // socket.broadcast.emit('move', serverBoard);
      // socket.emit('move', serverBoard);
    })

    socket.on('move', (board)=> {
      // if (socket.id == playerOne || socket.id == playerTwo ) {
      //   serverBoard = board;
      //   io.broadcast.emit('move', board)
      // } else {
      //   // Feedback to user they are not playing
      // }
      if (game) {
      serverBoard = board;
        if (!board.includes(0)) {
          socket.broadcast.emit('gameOver');
          socket.emit('gameOver');
        }
        console.log(board);
        socket.broadcast.emit('move', board);
      }
    })

    socket.on('disconnect', ()=> {
        //determine if socket was a player
        const user = users.find(_user => _user.id == socket.id);
        console.log('user to remove is, ', user);
        users = users.filter(_user => user !== _user);
        console.log('users are ', users.length, ' users');

        console.log(`
          Exiting user is Player One: ${(!!playerOne)}
          Exiting user is Player Two: ${(!!playerTwo)}
      `)
        //Set new playerOne and playerTwo
        if (users.length > 0) {
          if (PlayerOne = user) {
            PlayerOne = null;
            // users[Math.floor(Math.random() * users.length)].playerOne = true;
          }
          if (PlayerTwo = user) {
            PlayerTwo = null;
            // users[Math.floor(Math.random() * users.length)].playerTwo = true;
          }

          io.emit('playerLeft', users)
        }
        console.log('Goodbye, ', socket.id, ' :(');
      });
});




server.listen(port);
console.log("Listening on ", port);
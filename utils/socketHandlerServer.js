const { createUser } = require('./userHandler');
const { handleRequestJoin, handleMove } = require('./gameHandler');

module.exports = socketEvents = (socket, io) => {
  const { id } = socket;
  console.log(`${id} joined socket.io`);
  const user = createUser(id);
  let game = null;

  socket.on('requestJoin', ({ type, input })=> {
    // gameRequest.user = user.id;
    // console.log('gameRequest is, ', gameRequest.type, gameRequest.user);
    game  = handleRequestJoin({ type, input, user });
    
    if (game.error) {
      console.log(game.error)
    } else {
      game.userId = user.id;
      const { gameId } = game;
      console.log('Game Created: ', game);
      socket.join(gameId); 
      socket.emit('receiveGame', game);
    }
  });

  socket.on('clientMove', ({ move })=> {
    const gameEnder = handleMove({move, user, game});
    if (gameEnder) {
      io.to(game.gameId).emit('gameOver', game);
    } else {
      io.to(game.gameId).emit('gameState', game.board);
    }
  })
}
  





























  //addUser(id);
  //socket.emit('joined', {users, id, serverBoard})
  // socket.broadcast.emit('peerJoined', users);

  // socket.on('gameStatus', (status)=> {
  //   game = status;
  //   socket.broadcast.emit('gameStatus', {game, serverBoard});
  //   socket.emit('gameStatus', {game, serverBoard});
  // })

  // socket.on('resetGame', ()=> {
  //   game = true;
  //   serverBoard = [0,0,0,0,0,0,0,0,0];
  //   socket.broadcast.emit('gameStatus', {game: true, serverBoard});
  //   socket.emit('gameStatus', {game: true, serverBoard});
  //   // io.emit('move', );
  //   // socket.emit('move', serverBoard);
  // })

  // socket.on('gameOver', ()=> {
  //   game = false;
  //   socket.broadcast.emit('gameOver');
  //   socket.emit('gameOver');
  //   // reset();
  //   // socket.broadcast.emit('move', serverBoard);
  //   // socket.emit('move', serverBoard);
  // })

  // socket.on('move', (board)=> {
  //   // if (socket.id == playerOne || socket.id == playerTwo ) {
  //   //   serverBoard = board;
  //   //   io.broadcast.emit('move', board)
  //   // } else {
  //   //   // Feedback to user they are not playing
  //   // }
  //   if (game) {
  //   serverBoard = board;
  //     if (!board.includes(0)) {
  //       socket.broadcast.emit('gameOver');
  //       // socket.emit('gameOver');
  //     }
  //     console.log(board);
  //     socket.broadcast.emit('move', board);
  //     socket.emit('i moved')
  //   }
  // })

  // socket.on('disconnect', ()=> {
  //     //determine if socket was a player
  //     const user = users.find(_user => _user.id == socket.id);
  //     console.log('user to remove is, ', user);
  //     users = users.filter(_user => user !== _user);
  //     console.log('users are ', users.length, ' users');

  //     console.log(`
  //       Exiting user is Player One: ${(!!playerOne)}
  //       Exiting user is Player Two: ${(!!playerTwo)}
  //   `)
  //     //Set new playerOne and playerTwo
  //     if (users.length > 0) {
  //       if (PlayerOne = user) {
  //         PlayerOne = null;
  //         // users[Math.floor(Math.random() * users.length)].playerOne = true;
  //       }
  //       if (PlayerTwo = user) {
  //         PlayerTwo = null;
  //         // users[Math.floor(Math.random() * users.length)].playerTwo = true;
  //       }

  //       io.emit('playerLeft', users)
  //     }
  //     console.log('Goodbye, ', socket.id, ' :(');
  //   });
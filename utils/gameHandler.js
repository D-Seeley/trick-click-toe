const { Game } = require('./Game');

const {
    CREATE_PUBLIC_GAME,
    JOIN_PUBLIC_GAME,
    HOST_PRIVATE_GAME,
    JOIN_PRIVATE_GAME
} = require('./constants');

const games = [];

//Socket Events: 
      //switch on type of game input:
      // 1 - Host New Game - public (create public room)
      // 2 - Host New Game - private (create private room)
      // 3 - Join Random Game
      // 4 - Join Private Game

//

const handleRequestJoin = ({ type, user }) => {
    //console.log('gameRequest in handleRequestJoin is, ', type, 'by user id ', user)
    console.log('gameRequest in handler: ', type, 'which should equal ', CREATE_PUBLIC_GAME);
    switch (type) {
        case CREATE_PUBLIC_GAME:
            console.log('Create public game requested');
            const game = new Game(user);
            games.push(game);
            console.log(games);
            console.log('Game constructed is ', game.gameId);
            return game;
        case JOIN_PUBLIC_GAME:
            if (games.length == 0) return games.push(new Game(user))
            const openGames = games.filter(game => game.gameOpen);
            console.log('openGames.length is: ', openGames.length);
            const gameToJoin = openGames[Math.floor(openGames.length * Math.random())];
            console.log('gameToJoin formula is: ', Math.floor(openGames.length * Math.random()));
            gameToJoin.addPlayer(user);
            return gameToJoin;

            break;
        case HOST_PRIVATE_GAME:
            break;
        case JOIN_PRIVATE_GAME:
            break;
    }
};

const handleMove = ({move, user, game}) => {
    game.moveHistory.push({user, move: game.makeMove(move)});
    return game.isWinner();
}

module.exports = { handleRequestJoin, handleMove }
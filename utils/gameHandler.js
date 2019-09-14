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

const handleRequestJoin = ({ type, userId, gameId }) => {
    let game = null;
    //console.log('gameRequest in handleRequestJoin is, ', type, 'by user id ', user)
    console.log('gameRequest in handler: ', type, ' from ', userId, ' with gameId: ', (gameId) ? gameId : 'n/a');
    switch (type) {
        case CREATE_PUBLIC_GAME:
            game = new Game(userId);
            games.push(game);
            return game;

        case JOIN_PUBLIC_GAME:
            const openGames = games.filter(game => game.gameOpen && !game.isPrivateGame);
            if (openGames.length == 0) {
                game = new Game(userId);
                games.push(game);
                return game
            }
            const gameToJoin = openGames[Math.floor(openGames.length * Math.random())];
            gameToJoin.addPlayer(userId);
            return gameToJoin;

        case HOST_PRIVATE_GAME:
            game = new Game(userId, true);
            games.push(game);
            return game;

        case JOIN_PRIVATE_GAME:
            game = games.filter(game => game.gameId == gameId);
            if (game.length == 1) {
                game.addPlayer(userId);
                return game;
            } else {
                return { error: 'game not found'}
            }
    }
};

const handleMove = ({move, user, game}) => {
    game.moveHistory.push({user, move: game.makeMove(move)});
    return game.isWinner();
}

module.exports = { handleRequestJoin, handleMove }
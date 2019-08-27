const { Game } = require('./Game');
const {
    HOST_PUBLIC_GAME,
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

const handleRequestJoin = (gameRequest, user) => {
    switch (gameRequest.type) {
        case HOST_PUBLIC_GAME:
            return games.push(new Game(user));
        case JOIN_PUBLIC_GAME:
            if (games.length == 0) return games.push(new Game(user))
            const openGames = games.filter(game => game.gameOpen);
            const gameToJoin = openGames[Math.floor(openGames.lenght * Math.random())];
            gameToJoin.addPlayer(user);
            return game;

            break;
        case HOST_PRIVATE_GAME:
            break;
        case JOIN_PRIVATE_GAME:
            break;
    }
}

module.exports = { handleRequestJoin }
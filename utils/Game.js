class Game {
    constructor(user, privateGame = false) {
        console.log('Game - user is ', user);
        this.gameId = [...Array(5)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
        this.players = [user];
        this.isPrivateGame = privateGame;
        this.board = [0,0,0,0,0,0,0,0,0];
        this.gameOpen = true
        this.gameOver = false;
    }
    //Game Logic

    addPlayer = (user) => { return this.players.push(user) };
}

module.exports = { Game };
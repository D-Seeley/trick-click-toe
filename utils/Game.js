class Game {
    constructor(user) {
        this.gameId = user.id;
        this.players = [user];
        this.board = [0,0,0,0,0,0,0,0,0];
        this.gameOpen = true
        this.gameOver = false;
    }
    //Game Logic

    addPlayer = (user) => { return this.players.push(user) };
}

module.exports = { Game };
const logic = require('./logic');

class Game {
    constructor(user, privateGame = false) {
        console.log('Game - user is ', user);
        this.gameId = [...Array(5)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
        this.players = [user];
        this.isPrivateGame = privateGame;
        this.board = [0,0,0,0,0,0,0,0,0];
        this.moveHistory = [];
        this.gameOpen = true
        this.gameOver = false;
    }
    //Game Logic

    addPlayer = user => this.players.push(user);
    makeMove = move => { 
        //Using value 3 for testing, eventually make dynamic with this.players.length
        const value = Math.floor(Math.random() * 3);
        this.board[move] = value;
        return move;
     }

     isWinner = () => {
        const _isWinner = logic(this.board);
        if (_isWinner) {
            this.gameOver = true;
            console.log('*************Winner************');
        }

    
        return _isWinner;
     }
}

module.exports = { Game };
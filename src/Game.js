import React, { Component } from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
const socket = io();

//import game logic
import logic from './logic';

const tds = $('td');
console.log(tds);
// const t1 = $("#1");
// const t2 = $('#2');
// const t3 = $('#3');
// const t4 = $('#4');
// const t5 = $('#5');
// const t6 = $('#6');
// const t7 = $('#7');
// const t8 = $('#8');
// const t9 = $('#9');


//SocketLogic 
let p1, p2;
let playerOne = $('#playerOneTitle');
let playerTwo = $('#playerTwoTitle');
let playersWaiting = $('#playersWaiting');

const startingBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const initialState = {
    _users: [],
    _board: startingBoard,
    _game: true
}


export default class Game extends Component  {
    constructor() {
        super();
        this.state = initialState;

        this.mapColorToBoard = this.mapColorToBoard.bind(this);
        this.mapClickHandler = this.mapClickHandler.bind(this);
        // this.checkGameOver = this.checkGameOver.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentDidMount() {
        //Socket Requests
        socket.on('joined', ({users, id, serverBoard})=> {
            this.setState({_users: users, _board: serverBoard});
            // this.setState({_users: users});
            // if (users.find(user => user.id === id).playerOne) {
            //     console.log("I'm player one!");
            //     p1 = id;
            //     playerOne.text('player two is')
            // } else if (users.find(user => user.id === id).playerTwo) {
            //     console.log("I'm player two!");
            //     p2 = id;
            // } else {
            //     console.log("I'm a spectator");
            //     p1 = users.find(user => user.playerOne === true).id;
            //     p2 = users.find(user => user.playerTwo === true).id;
            // }
            // console.log('My id is ', id);
            // p1 = id;
            // playerOne.text(`Player One Online is ${p1}`);
            // playerOne.text(`Player Two Online is ${p2}`);
            // playersWaiting.text(`There are ${users.length - 1} Players watching.`)
            // socket.broadcast.emit('available', peer.id)

            
        })

        socket.on('gameStatus', (game)=> {
            this.setState({_game: game})
        })

        socket.on('move', (serverBoard)=> {
            this.setState({_board: serverBoard});
        })

        socket.on('gameOver', ()=> 
            this.setState({_game: false}
        ));

        //read board helper
        //set board helper

        socket.on('peerJoined', (users)=> {
            // console.log(`peer ${peerId} joined`);
            this.setState({_users: users})

            // if (users.length == 1) {
            //     p2 = peerId;
            //     playerTwo.text(`Player Two Online is ${peerId}`);
            // } else {
            //     // playersWaiting.text(`There are ${this.state.users.length - 1} Players watching.`);
            // }
        })

        this.mapClickHandler(this.state._board);
        
        $('#resetButton').on('click', ()=> {
            console.log('reset button clicked');
            this.resetGame();
        });
    }

    resetGame() {
        socket.emit('resetGame');
        // socket.emit('gameStatus', true);
        // this.setState({_board: startingBoard});
    }

    mapClickHandler(board) {
        console.log(board)
        board.map((square, idx) => {
            let _square = $(`#${idx + 1}`);
            
            _square.on('click', ()=> {
                if (this.state._game) {
                    const randomNum = Math.floor(Math.random() * Math.floor(3));
                    board[idx] = randomNum;
                    this.setState({_board: board});
                    socket.emit('move', this.state._board);

                    if (logic(this.state._board)) {
                        socket.emit('gameOver');
                        socket.emit('gameStatus', false)
                    }
                }
            })
        });
    }

    mapColorToBoard(board) {
        board.map((square, idx) => {
            let _square = $(`#${idx + 1}`);
            
            switch (square) {
                case 0: 
                return _square.css("backgroundColor", "white");
                case 1: 
                return _square.css("backgroundColor", "red")
                case 2: 
                return _square.css("backgroundColor", "blue")
            }
        })
    }

    render () {
        this.mapColorToBoard(this.state._board);

        console.log('the state is: ', this.state);
        
        if (this.state._game) {
            return (<hr />)
        } else {
            return (
                <div>
                <hr />
                <h1 id="gameOver">Game Over</h1>
                <hr />
                </div>
            )
        }
        
    }
}



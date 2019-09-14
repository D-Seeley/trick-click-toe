import React, { Component } from 'react';
import { connect } from 'react-redux'

import Board from './board/Board';

// let p1, p2;
// let playerOne = $('#playerOneTitle');
// let playerTwo = $('#playerTwoTitle');
// let playersWaiting = $('#playersWaiting');

// const initialState = {
//     _users: [],
//     _board: startingBoard,
//     _game: true
// }

class Game extends Component  {
    constructor(props) {
        super(props);
        console.log('Game props are: ', this.props);
    }

    componentDidUpdate() {
        // this.mapClickHandler(this.state._board);
    }

    resetGame() {
        // this.setState({_board: startingBoard});
        // socket.emit('resetGame');
        
    }

    /*
    mapClickHandler(board) {
        console.log(board)
        board.map((square, idx) => {
            let _square = $(`#${idx + 1}`);

           
            
            _square.on('click', ()=> {
                if (this.state._game) {
                    const randomNum = Math.floor(Math.random() * Math.floor(3));
                    console.log('randomNum is ', randomNum)
                    board[idx] = randomNum;
                    // this.setState({_board: board});
                    console.log('swuare is: ', square, '_square -s: ', _square);
                    this.setColor(randomNum, _square)
                    socket.emit('move', board);

                    if (logic(this.state._board)) {
                        socket.emit('gameOver');
                        socket.emit('gameStatus', false)
                    }
                }
            })
        });
    }

    setColor(value, squareSelector) {
        switch (value) {
            case 0: 
            return squareSelector.css("backgroundColor", "white");
            case 1: 
            return squareSelector.css("backgroundColor", "red")
            case 2: 
            return squareSelector.css("backgroundColor", "blue")
        }
    }

    */
    // mapColorToBoard(board) {
    //     board.map((square, idx) => {
    //         let _square = $(`#${idx + 1}`);
    //         this.setColor(square, _square);
    //     })
    // }

    render () {
        // this.mapColorToBoard(this.state._board);

        return (
            <div id={'game'}>
                <Board />
                <button id='resetButton'>Reset</button>
            </div>
        )
        
        // if (this.state._game) {
        //     return (<hr />)
        // } else {
        //     return (
        //         <div>
        //         <hr />
        //         <h1 id="gameOver">Game Over</h1>
        //         <hr />
        //         </div>
        //     )
        // }
        
    }
}

const mapStateToProps = ({board, gameId}) => ({
    board,
    gameId
})

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
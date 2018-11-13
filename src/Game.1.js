import React, { Component } from 'react';
import { render } from 'react-dom';
// const socket = require('socket.io-client')();



class Game extends Component () {
    constructor() {
        super();
        this.state = {
            board: []
        };
    }

    render() {
//         // let peers = [];

        // let userId, p1, p2;
        // let playerOne = $('#playerOneTitle');
        // let playerTwo = $('#playerTwoTitle');
        // let playersWaiting = $('#playersWaiting');

        // const colors = ['white', 'red', 'blue']



        // //Socket Requests
        // socket.on('joined', ({users, id})=> {
        //     if (users.find(user => user.id === id).playerOne) {
        //         console.log("I'm player one!");
        //         p1 = id;
        //         playerOne.text('player two is')
        //     } else if (users.find(user => user.id === id).playerTwo) {
        //         console.log("I'm player two!");
        //         p2 = id;
        //     } else {
        //         console.log("I'm a spectator");
        //         p1 = users.find(user => user.playerOne === true).id;
        //         p2 = users.find(user => user.playerTwo === true).id;
        //     }
        //     console.log('My id is ', id);
        //     p1 = id;
        //     userId = id;
        //     playerOne.text(`Player One Online is ${p1}`);
        //     playerOne.text(`Player Two Online is ${p2}`);
        //     playersWaiting.text(`There are ${users.length - 1} Players watching.`)
        //     // socket.broadcast.emit('available', peer.id)
        // })

        // socket.on('move', (_board)=> {
        //     board = board;
        // })

        // //read board helper
        // //set board helper


        // socket.on('playerLeft', (users)=> {
        //     // if (users.find(user => user.id === id)) {

        //     // }
        // })

        // socket.on('peerJoined', (_users)=> {
        //     // console.log(`peer ${peerId} joined`);
        //     users = _users;

        //     if (users.length == 1) {
        //         p2 = peerId;
        //         playerTwo.text(`Player Two Online is ${peerId}`);
        //     } else {
        //         playersWaiting.text(`There are ${peers.length - 1} Players watching.`);
        //     }
        // })


        // // //Event Handlers
        // // const moveHandler = (move) => {
        // // }


        // const clickHandler = (tile)=> {
        //     const randomColor = colors[Math.floor(Math.random() * Math.floor(colors.length))];
        //     tile.css("background-color", randomColor);
        //     if (peers.length > 0) {
        //         console.log("who's here?")
        //     } else {
        //         console.log("I'm along");
        //     }
        //     console.log('tile #', tile[0], ' clicked')
        // }

        // const t1 = $("#1");
        // const t2 = $('#2');
        // const t3 = $('#3');
        // const t4 = $('#4');
        // const t5 = $('#5');
        // const t6 = $('#6');
        // const t7 = $('#7');
        // const t8 = $('#8');
        // const t9 = $('#9');

        // let board = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

        // board.map( tile => tile[0].onclick = ()=> clickHandler(tile));

        return (<hr />)
    }
}


const root = document.getElementById('root');
render(<hr />, root);
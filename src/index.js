const socket = require('socket.io-client')();

let peers = [];
let id;

let p1, p2;
let playerOne = $('#playerOneTitle');
let playerTwo = $('#playerTwoTitle');
let playersWaiting = $('#playersWaiting');

const colors = ['white', 'red', 'blue']



//Socket Requests
socket.on('iJoined', (_id)=> {
    console.log('My id is ', _id);
    id = _id;
    p1 = id;
    playerOne.text(`Player One Online is ${id}`);
    // socket.broadcast.emit('available', peer.id)
})

socket.on('move', (_board)=> {
    board = board;
})

//read board helper
//set board helper


socket.on('disconnected', (socketId)=> {
    peers = peers.filter(el => el !== socketId);
    console.log('Peer Disconnected')
})

socket.on('peerJoined', (peerId)=> {
    console.log(`peer ${peerId} joined`);
    peers.push(peerId);

    if (peers.length == 1) {
        p2 = peerId;
        playerTwo.text(`Player Two Online is ${peerId}`);
    } else {
        playersWaiting.text(`There are ${peers.length - 1} Players watching.`);
    }
})


//Event Handlers
const moveHandler = (move) => {
}


const clickHandler = (tile)=> {
    const randomColor = colors[Math.floor(Math.random() * Math.floor(colors.length))];
    tile.css("background-color", randomColor);
    if (peers.length > 0) {
        console.log("who's here?")
    } else {
        console.log("I'm along");
    }
    console.log('tile #', tile[0], ' clicked')
}

const t1 = $("#1");
const t2 = $('#2');
const t3 = $('#3');
const t4 = $('#4');
const t5 = $('#5');
const t6 = $('#6');
const t7 = $('#7');
const t8 = $('#8');
const t9 = $('#9');

let board = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

board.map( tile => tile[0].onclick = ()=> clickHandler(tile));

import io from 'socket.io-client';
// import addSocketEvents from './socketEvents';
import store from '../store';
import { receiveGame, receiveMove } from '../store';

let socket = null;
// let socket = null;

class SocketSingleton {
    constructor() { 
        if (!socket) socket = io();

        console.log('conn is ', socket);
        
        socket.on('receiveGame', (game) => {
            store.dispatch(receiveGame(game))
        });

        socket.on('gameState', (boardUpdate)=> {
            store.dispatch(receiveMove(boardUpdate))
        });

        socket.on('gameOver', (game)=> {
            store.dispatch(receiveGame(game))
        });

        socket.on('connect', ()=> {
            console.log('socket is connected, ', socket)
            //future - sync constants between server and client
        });

        this.socket = socket;
    };
};


export const connectGame = ({ gameRequest }) => {
    console.log('game requested is ', gameRequest, 'socket is: ', socket);
    socket.emit('requestJoin', { type: gameRequest });
}

export const clientMove = (move) => {
    console.log('move made');
    socket.emit('clientMove', { move }, function (data) {
        if (data.error) 
          console.log('Something went wrong on the server');
      
        if (data.ok)
          console.log('Event was processed successfully');
      });
}

export default SocketSingleton;



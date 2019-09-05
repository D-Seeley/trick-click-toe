import io from 'socket.io-client';
// import addSocketEvents from './socketEvents';
import store from '../store';
import { receiveGame } from '../store';

console.log('dispatch is ', store.dispatch)
console.log('receiveGame is ', receiveGame)

let socket = null;
// let socket = null;

class SocketSingleton {
    constructor() { 
        if (!socket) socket = io();

        console.log('conn is ', socket);
        
        socket.on('receiveGame', (game) => {
            console.log('game recieved is ', game);
            store.dispatch(receiveGame(game.gameId))
        });

        socket.on('connect', ()=> {
            console.log('socket is connected, ', socket)
            //future - sync constants between server and client

       
        })

        this.socket = socket;
        let count = 0
        console.log('SocketSingleton called ', count++);
    }
}


export const connectGame = ({ gameRequest }) => {
    console.log('game requested is ', gameRequest, 'socket is: ', socket);
    socket.emit('requestJoin', { type: gameRequest });
}

export default SocketSingleton;



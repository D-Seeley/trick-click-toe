import io from 'socket.io-client';
// import addSocketEvents from './socketEvents';
import { dispatch } from '../store';

console.log('io is', io)

let socket = null;
// let socket = null;

class SocketSingleton {
    constructor() { 
        if (!socket) socket = io();

        console.log('conn is ', socket);

        socket.on('connect', ()=> {
            // socket = _socket;
            console.log('socket is connected, ', socket)

            socket.on('receiveGame', (game)=> {
                dispatch({ gameId: game })
            });
        })

        this.socket = socket;
        let count = 0
        console.log('SocketSingleton called ', count++);
    }
}


export const connectGame = ({ gameRequest }) => {
    console.log('game requested, socket is: ', socket);
    socket.emit('requestJoin', gameRequest);
}

export default SocketSingleton;



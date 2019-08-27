import io from 'socket.io-client';
import addSocketEvents from './socketEvents';

console.log('[socketSingleton] add socket is: ', addSocketEvents);

let conn = null;

class SocketSingleton {
    constructor() {
        if (!conn) conn = addSocketEvents(io());
        this.socket = conn;
    }
}
export default SocketSingleton;


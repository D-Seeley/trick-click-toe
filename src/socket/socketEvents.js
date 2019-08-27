const addSocketEvents = (io) => {
    // io.on('connection', ()=> {

    // })

    io.on('receiveGame', ()=> {

    });

    return io;
}

export default addSocketEvents;
const socketIO = require('socket.io');

const event = {
  connect: 'connect',
  disconnect: 'disconnecting',
  hello: 'hello',
};

const key = 'diId3xvkmycsaVjZgfo';

const socketEvents = server => {
  const io = socketIO(server);

  io.on(event.connect, socket => {
    const { key } = socket.handshake.query;

    console.log('received connection');
    console.log(key);

    socket.emit(event.hello, { hello: 'world' });
  });

  io.on(event.disconnect, socket => {
    console.log('disconnected');
    console.log(Object.keys(socket));
  });
};

module.exports = socketEvents;

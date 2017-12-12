
const socketio = require('socket.io');

module.exports = (app) =>{
  const io = socketio(app);
  io.on('connection', function (socket) {
    console.log(`Connected to SOCKETIO ${socket.id}`);

    socket.on('send-message', function (data) {
      console.log(`Mensaje recibido, reenviando: ${data.message}`);
      socket.broadcast.emit('recibe-message', {
        username: socket.id,
        message: data.message
      });
    });

  });

};

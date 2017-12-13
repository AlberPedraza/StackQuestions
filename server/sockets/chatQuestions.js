const express    = require('express');
const passport   = require('passport');
const path = require('path');
const socketio = require('socket.io');
const Questions = require('../api/questions/questions.model');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);


module.exports = (app) =>{
  const io = socketio(app);
  io.on('connection', function (socket) {
    console.log(`Connected to SOCKETIO ${socket.id}`);

    socket.on('send-message', function (data) {
            console.log(data);
      console.log(`Mensaje recibido, reenviando:`, data);
      socket.broadcast.emit('recibe-message', {
        username: socket.id,
        message: data.message,
        owner: data.creator,
        events_id: data.events_id
      });
      const theQuestions = new Questions({
        message:data.message,
        owner: data.creator,
        events_id: data.events_id
      });
      return theQuestions.save()
      .then(question =>{
        req.login(question, (err) => {
          if (err)
            return res.status(500).json({ message: 'Something went wrong' });

          res.status(200).json(req.question);
        });
      });

    });
  });

};

const express    = require('express');
const passport   = require('passport');
const path = require('path');
const socketio = require('socket.io');
const User = require('../api/user/user.model');
const Questions = require('../api/questions/questions.model');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);


module.exports = (app) =>{
  const io = socketio(app);
  io.on('connection', function (socket) {
    console.log(`Connected to SOCKETIO ${socket.id}`);

    socket.on('send-message', function (data) {
      console.log(`Mensaje recibido, reenviando(back):`, data);


      socket.broadcast.emit('recibe-message', {
        username: socket.id,
        message: data.message,
        owner: data.creator,
        name:data.username,
        events_id: data.events_id,
        score: data.score
      });
      const theQuestions = new Questions({
        message:data.message,
        owner: data.creator,
        events_id: data.events_id,
        score: data.score
      });
      //guarda en BBDD
      theQuestions.save()
      .then(question =>{
        console.log("asdasdasdasdasdas",question.owner);
        Questions.findById(question).populate("owner")
          .then(questions_s => {
            console.log("dentrooooooo",questions_s.owner.username);
            res.status(200).json(questions_s);
          });

        req.login(question, (err) => {
          if (err)
            return res.status(500).json({ message: 'Something went wrong' });
            res.status(200).json(req.question);

      });




              });
          });

        });
      };

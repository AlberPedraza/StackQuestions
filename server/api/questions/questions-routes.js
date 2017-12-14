const express    = require('express');
const passport   = require('passport');
const path = require('path');
// Our user model
const Questions = require('./questions.model');
const User = require('../user/user.model');

const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = express.Router();

exports.listQuestions= function(req, res, next){
  Questions.find({events_id : req.params.idEvent}).populate("owner")
  .then( questionsList => {res.json(questionsList);})
  .reject(err => { res.status(500).json(err);});
};
exports.listOneQuestions= function(req, res, next){
  Events.findById(req.params.id)
  .then( QuestionsList => {res.json(QuestionsList);})
  .reject(err => { res.status(500).json(err);});
};
exports.signUpQuestions = function(req, res, next) {
  const {title, message, score, owner, events_id} = req.body;

if (!title || !message)
  return res.status(400).json({ message: 'Provide title and message' });

debug('Find questions in DB');

Questions.findOne({ title },'_id').exec().then(question =>{
  if(question)
    return res.status(400).json({ message: 'The question already exists' });

  const theQuestions = new Questions({
    title,
    message,
    score,
    owner,
    events_id
  });
  return theQuestions.save()
  .then(question =>{
    req.login(question, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      res.status(200).json(req.question);
    });
  });
}).catch(e => {
  console.log(e);
  res.status(400).json({ message: 'Something went wrong' });
});
};

exports.upScore = function(req, res, next){
        console.log(req.body);
        const idQuestion = req.body.idQuestion;

        Questions.findByIdAndUpdate(idQuestion, { $inc: { score: 1 } } ,{new: true })
        .then(singleQuestion => {
          Questions.find({events_id: singleQuestion.events_id}).sort({ score: -1 })
            .then(questions => {
              res.status(200).json(questions);
            }
          );
        });



};

exports.editQuestions = function(req, res ,next) {
  const updates = {
    title: req.body.title,
    message: req.body.message,
    score: req.body.score,
    owner: req.body.owner,
    events_id: req.body.events_id
  };
  console.log(updates);
  Questions.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update Questions", err});
    }
    res.json({ message: 'Questions updated successfully'});
  });
};

exports.removeQuestions = function (req, res) {
    Questions.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'question removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the question', error: err }));
};

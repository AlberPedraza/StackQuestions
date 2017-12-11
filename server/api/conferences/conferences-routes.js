const express    = require('express');
const passport   = require('passport');
const path = require('path');
// Our user model
const Conferences = require('./conferences.model');
const User = require('../user/user.model');

const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = express.Router();


exports.listConferences= function(req, res, next){
  Conferences.find()
  .then( conferencesList => {res.json(conferencesList);})
  .reject(err => { res.status(500).json(err);});
};
exports.listOneConferences= function(req, res, next){
  console.log("userrrrr",req.user);
  Conferences.findById(req.params.id).populate("creator")
  .then( conferencesList => {res.json(conferencesList);})
  .reject(err => { res.status(500).json(err);});
};
exports.signUpConferences = function(req, res, next) {
  const {creator, name, descriptions, categories, total_users, events} = req.body;
console.log(req.user);
if (!name || !descriptions)
  return res.status(400).json({ message: 'Provide name and descriptions' });

debug('Find conferences in DB');

Conferences.findOne({ name },'_id').exec().then(conferences =>{
  if(conferences)
    return res.status(400).json({ message: 'The conferences already exists' });

  const theConferences = new Conferences({
    creator:req.user._id,
    name,
    descriptions,
    categories,
    total_users,
    events
  });
  theConferences.save()
  .then(conferences =>{
      res.status(200).json(conferences);
  });
}).catch(e => {
  console.log(e);
  res.status(400).json({ message: 'Something went wrong' });
});
};

exports.editConferences = function(req, res ,next) {
  const updates = {
    creator: req.body.creator,
    name: req.body.name,
    descriptions: req.body.descriptions,
    categories: req.body.categories,
    total_users: req.body.total_users,
    events: req.body.events

  };
  console.log(updates);
  Conferences.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update Conferences", err});
    }
    res.json({ message: 'Conferences updated successfully'});
  });
};

exports.removeConferences = function (req, res) {
    Conferences.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'conferences removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the conferences', error: err }));
};

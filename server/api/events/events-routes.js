const express    = require('express');
const passport   = require('passport');
const path = require('path');
// Our user model
const Events = require('./events.model');
const Conferences = require('../conferences/conferences.model');
const User = require('../user/user.model');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = express.Router();


exports.listEvents= function(req, res, next){
  Events.find()
  .then( eventsList => {res.json(eventsList);})
  .reject(err => { res.status(500).json(err);});
};
exports.listOneEvents= function(req, res, next){
  Events.findById(req.params.id)
  .then( eventsList => {res.json(eventsList);})
  .reject(err => { res.status(500).json(err);});
};
exports.signUpEvents = function(req, res, next) {
  const {name, admin, supports, descriptions, tags, participants, init_date, final_date} = req.body;

if (!name || !descriptions)
  return res.status(400).json({ message: 'Provide name and descriptions' });

debug('Find events in DB');

Events.findOne({ name },'_id').exec().then(events =>{
  if(events)
    return res.status(400).json({ message: 'The events already exists' });

  const theEvents = new Events({
    name,
    descriptions,
    admin,
    supports,
    tags,
    participants,
    init_date,
    final_date
  });
theEvents.save()
  .then(events =>{
    console.log("req.params.idConference",req.params.idConference);
    console.log("events",events._id);
        Conferences.findByIdAndUpdate(req.params.idConference, {$push: {events: events._id}}, {new: true})
        .then( events => res.status(200).json(events));
  })
  .catch(err => { console.log(err);res.status(500).json({ message: 'Something went wrong'});});

}).catch(e => {
  console.log(e);
  res.status(400).json({ message: 'Something went wrong' });
});
};

exports.editEvents = function(req, res ,next) {
  const updates = {
    name: req.body.name,
    descriptions: req.body.descriptions,
    admin: req.body.admin,
    supports: req.body.supports,
    tags: req.body.tags,
    participants: req.body.participants,
    init_date: req.body.init_date,
    final_date: req.body.final_date

  };
  console.log(updates);
  Events.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update Events", err});
    }
    res.json({ message: 'Events updated successfully'});
  });
};

exports.removeEvents = function (req, res) {
    Events.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'events removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the events', error: err }));
};

exports.newParticipant = function (req, res) {
  Events.findByIdAndUpdate(req.params.id, { $push: { participants: req.user._id } })
  .then((list) => res.status(202).json({ message: 'newParticipant successfully' }));
};

exports.followEvent = function (req, res) {

  const idEvent = req.body.idEvent;

  Events.findByIdAndUpdate(idEvent, {$push: { participants : idEvent } })
  .then(singleEvents => {
    console.log("----->",idEvent);
    Events.findById(idEvent)
      .then(events => {
        console.log(events);
        res.status(200).json(events);
      }
    );
  });
};

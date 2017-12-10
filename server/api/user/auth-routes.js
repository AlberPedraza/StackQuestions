const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
// Our user model
const User = require('./user.model');

const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = express.Router();
const salt = bcrypt.genSaltSync(10);


exports.listUser = function(req, res, next){
  User.find()
  .then( userList => {res.json(userList);})
  .reject(err => { res.status(500).json(err);});
};
exports.listOneUser = function(req, res, next){
  User.findById(req.params.id)
  .then( usersList => {res.json(usersList);})
  .reject(err => { res.status(500).json(err);});
};
exports.signUp = function(req, res, next) {
  const {username, password, email, name, pic_name, pic_path} = req.body;

if (!username || !password)
  return res.status(400).json({ message: 'Provide username and password' });

debug('Find user in DB');

User.findOne({ username },'_id').exec().then(user =>{
  if(user)
    return res.status(400).json({ message: 'The username already exists' });

  const hashPass = bcrypt.hashSync(password, salt);
  debug('creating user');
  const theUser = new User({
    username,
    email,
    password: hashPass,
    name,
    pic_path,
    pic_name
  });
  return theUser.save()
  .then(user =>{
    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong err' });

      res.status(200).json(req.user);
    });
  });
}).catch(e => {
  console.log(e);
  res.status(400).json({ message: 'Something went wrong catch' });
});
};

exports.logIn = function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong logIn :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
};

exports.editUser = function(req, res ,next) {
  const {username, password, email, name, pic_name, pic_path} = req.body;

  if (!username || !password)

    return res.status(400).json({ message: 'Provide username and password' });
  debug('Find user in edit DB');

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

      const hashPass = bcrypt.hashSync(req.body.password, salt);

      const updates = {
        username: username,
        email: email,
        password: hashPass,
        name: name,
        pic_path: pic_path,
        pic_name: pic_name
      };

    return User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update User", err});
    }
    res.json({ message: 'User updated successfully'});
  });
});
};

exports.logOut = function(req, res ,next) {
  req.logout();
  res.status(200).json({ message: 'Success' });
};

exports.logStill = function(req, res ,next) {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
};


exports.private = function(req, res ,next) {
  if (req.isAuthenticated()) {
    res.json({ message: 'This is a private message' });
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
};

exports.removeUser = function (req, res) {
    User.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'user removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the user', error: err }));
};

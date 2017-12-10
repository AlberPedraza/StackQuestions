const express = require('express');
const controller = require('./auth-routes');

var router = express.Router();

router.get('/' , controller.listUser);
router.get('/loggedin' , controller.logStill);
router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);
router.post('/logout', controller.logOut);
router.get('/private', controller.private);
router.get('/:id' , controller.listOneUser);
router.put('/:id/edit', controller.editUser);
router.delete('/:id/edit', controller.removeUser);

module.exports = router;

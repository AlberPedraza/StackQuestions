const express = require('express');
const controller = require('./conferences-routes');

var router = express.Router();

router.get('/' , controller.listConferences);
router.get('/:id' , controller.listOneConferences);
router.post('/signup', controller.signUpConferences);
router.put('/:id/edit', controller.editConferences);
router.delete('/:id/edit', controller.removeConferences);

module.exports = router;

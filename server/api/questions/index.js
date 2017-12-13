const express = require('express');
const controller = require('./questions-routes');

var router = express.Router();

router.get('/:idEvent' , controller.listQuestions);
router.post('/signup', controller.signUpQuestions);
router.put('/:id/edit', controller.editQuestions);
router.delete('/:id/edit', controller.removeQuestions);

module.exports = router;

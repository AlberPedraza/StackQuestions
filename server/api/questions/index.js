const express = require('express');
const controller = require('./questions-routes');

var router = express.Router();

router.get('/' , controller.listQuestions);
router.get('/:id' , controller.listOneQuestions);
router.post('/signup', controller.signUpQuestions);
router.put('/:id/edit', controller.editQuestions);
router.delete('/:id/edit', controller.removeQuestions);

module.exports = router;

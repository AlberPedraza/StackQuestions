const express = require('express');
const controller = require('./events-routes');

var router = express.Router();

router.get('/' , controller.listEvents);
router.get('/:id' , controller.listOneEvents);
router.post('/:idConference/signup', controller.signUpEvents);
router.post('/:id/newParticipant', controller.newParticipant);
router.put('/:id/edit', controller.editEvents);
router.delete('/:id/edit', controller.removeEvents);


module.exports = router;

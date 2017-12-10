
var path = require('path');

module.exports = function(app) {
  app.use('/api/user', require('../api/user'));
  app.use('/api/questions', require('../api/questions'));
  app.use('/api/events', require('../api/events'));
    app.use('/api/conferences', require('../api/conferences'));
	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};

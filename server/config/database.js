
const path = require('path');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/stackquestions';
//const dbURL = `${process.env.MONGO_URL}/${process.env.DB_NAME}`;
//mongodb://localhost/stackquestions

mongoose.connect(dbURL,{ useMongoClient: true })
  .then(() => debug(`connected to database ${dbURL}`))
  .catch(e => {
    debug(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });

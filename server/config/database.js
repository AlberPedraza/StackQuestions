require('dotenv').load();
const path = require('path');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');

const dbURL = process.env.MONGOURL;

mongoose.connect(dbURL)
  .then(() => console.log(`Connected to ${dbURL}`))
  .catch(e => {
    console.log(`Error connecting to ${dbURL} database`);
    throw e;
  });

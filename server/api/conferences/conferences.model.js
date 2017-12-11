
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Events = require('../events/events.model');
const User = require('../user/user.model');

const ConferencesSchema = new Schema({
  creator : {type:Schema.Types.ObjectId , ref:"User"},
  name : { type: String },
  descriptions : { type: String },
  total_users : { type: Number },
  categories: { type: [String]},
  events : [{type:Schema.Types.ObjectId , ref:"Events"}]

},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Conferences = mongoose.model('Conferences', ConferencesSchema);
module.exports = Conferences;


const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('../user/user.model');
const Events = require('../events/events.model');

const QuestionsSchema = new Schema({
  title : { type: String },
  message : { type: String },
  score : { type: Number ,default:0},
  owner : {type:Schema.Types.ObjectId , ref:"User"},
  events_id : {type:Schema.Types.ObjectId , ref:"Events"}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Questions = mongoose.model('Questions', QuestionsSchema);
module.exports = Questions;

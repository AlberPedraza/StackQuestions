
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('../user/user.model');

const EventsSchema = new Schema({
  name : { type: String },
  admin : [{type:Schema.Types.ObjectId , ref:"User"}],
  supports : [{type:Schema.Types.ObjectId , ref:"User"}],
  descriptions : { type: String },
  tags : { type: [String]},
  participants : [{type:Schema.Types.ObjectId , ref:"User"}],
  init_date : { type: Date },
  final_date : { type: Date }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Events = mongoose.model('Events', EventsSchema);
module.exports = Events;

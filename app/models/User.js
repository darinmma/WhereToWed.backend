var mongoose = require('mongoose')

// var Venue = require('../models/Venue');

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // favorites: [{type: Schema.Types.ObjectId, ref: 'Venue'}]
})

var User = mongoose.model('User', userSchema)

module.exports = User

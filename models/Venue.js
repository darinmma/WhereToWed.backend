var mongoose = require('mongoose')

var venueSchema = new mongoose.Schema({
  name: String,
  contact: String,
  contactEmail: String,
  contactPhone: String,
  minOccupancy: Number,
  maxOccupancy: Number,
  minPrice: Number,
  maxPrice: Number,
  outsideVendor: Boolean,
  location: {
    street: String,
    city: String,
    state: String,
    zipCode: Number
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue

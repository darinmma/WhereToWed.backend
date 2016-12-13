var mongoose = require('mongoose');

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
  password_digest: String,
  location: {
    street: String,
    city: String,
    state: String,
    zipCode: Number
  }
});

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue

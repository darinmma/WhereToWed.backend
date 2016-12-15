var mongoose = require('./database')

var Venues = require('../models/Venue')

Venues = [
  {
    "name": "Shore Hotel",
    "contact": "Allison Shore",
    "contactEmail": "allison@shorehotel.com",
    "contactPhone": "(555)555-1212",
    "minOccupancy": 50,
    "maxOccupancy": 150,
    "minPrice": 5000,
    "maxPrice": 12000,
    "outsideVendor": false,
    "location": {"street": "1515 Ocean Ave.", "city":"Santa Monica", "state": "CA", "zipCode": 90401}
  },
  {
    "name": "The Victorian",
    "contact": "Victor Rian",
    "contactEmail": "victor@victorian.com",
    "contactPhone": "(555)555-1213",
    "minOccupancy": 100,
    "maxOccupancy": 250,
    "minPrice": 7000,
    "maxPrice": 15000,
    "outsideVendor": true,
    "location": {"street": "2640 Main St.", "city":"Santa Monica", "state": "CA", "zipCode": 90405}
  }
]

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


Venues.remove({}, function(err) {
 if(err) console.log(err);
 Venues.create(venues, function(err, savedVenues) {
   if (err) {
     console.log(err);
   } else {
     console.log("Database seeded with " + savedVenues.length + " venues.");
     mongoose.connection.close();
   }
   process.exit();
 });
});

var Venue = require('../models/Venue');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Venue.find({}, function(err, venues){
    if(err) next(err)

    res.json(venues)
  }).select('-__v')
}

function create(req, res, next) {
  var venue = new Venue(req.body);

  venue.save(function(err, savedVenue){
    if(err) next(err)

    res.json(savedVenue)
  })
}

function show(req, res, next) {
  var id = req.params.id
  Venue.findById(id, function(err, venue){
    if(err) next(err)

    res.json(venue)
  })
}

function update(req, res, next) {
  var id = req.params.id;

  Venue.findById(id, function(err, venue){
    venue.name = req.body.name;
    venue.contact = req.body.contact;
    venue.contactEmail = req.body.contactEmail;
    venue.contactPhone = req.body.contactPhone;
    venue.minOccupancy = req.body.minOccupancy;
    venue.maxOccupancy = req.body.maxOccupancy;
    venue.minPrice = req.body.minPrice;
    venue.maxPrice = req.body.maxPrice;
    venue.outsideVendor = req.body.outsideVendor;
    venue.location.street = req.location.street;
    venue.location.city = req.body.location.city;
    venue.location.state = req.body.location.state;
    venue.location.zipCode = req.body.location.zipCode;

    venue.save(function(err, updatedVenue){
      if(err) next(err)
      res.json(updatedVenue)
    })
  })
}

function destroy(req, res, next) {
  var id = req.params.id

  Venue.remove({_id: id}, function(err){
    if(err) next(err);

    res.json({message: 'Venue deleted'})
  })
}

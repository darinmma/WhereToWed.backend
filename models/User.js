var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Venue'}],
  venueOwner: {type: Boolean, default: false}
})

// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'))

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
userSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', userSchema)

module.exports = User

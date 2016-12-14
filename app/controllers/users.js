var User = require('../models/User')

module.exports = {
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

function create(req, res, next){
  var user = new User(req.body)

  user.save(function(err, savedUser){
    if(err) next(err)

    res.json(savedUser)
  })
}

function show(req, res, next) {
  var id = req.params.id
  User.findById(id, function(err, user){
    if(err) next(err)

    res.json(user)
  })
}

function update(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user){
    user.name = req.body.name

    user.save(function(err, updatedUser){
      if(err) next(err)
      res.json(updatedUser)
    })
  })
}

function destroy(req, res, next) {
  var id = req.params.id

  User.remove({_id: id}, function(err){
    if(err) next(err);

    res.json({message: 'User deleted'})
  })
}

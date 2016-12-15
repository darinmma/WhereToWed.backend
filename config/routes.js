var express = require('express');
var router = express.Router();
var venuesController = require('../controllers/venues')
var usersController =
require('../controllers/users')
var token = require('./token_auth')

//api homepage
router.get('/', function(req, res, next) {
  res.render('index');
});

//venue routes
router.route('/api/venues')
  .get(venuesController.index)
  .post(token.authenticate, venuesController.create)

router.route('/api/venues/:id')
  .get(venuesController.show)
  .patch(token.authenticate, venuesController.update)
  .delete(token.authenticate, venuesController.destroy)

//user routes
router.route('/api/users')
  .get(usersController.index)
  .post(usersController.create)

router.route('/api/users/:id')
  .get(token.authenticate, usersController.show)
  .patch(token.authenticate, usersController.update)
  .delete(token.authenticate, usersController.destroy)

//signin token routes
router.route('/api/token')
  .post(token.create)

module.exports = router

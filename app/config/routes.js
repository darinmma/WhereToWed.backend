var express = require('express');
var router = express.Router();
var venuesController = require('../controllers/venues')
var usersController =
require('../controllers/users')

//api homepage
router.get('/', function(req, res, next) {
  res.render('index');
});

//venue routes
router.route('/api/venues')
  .get(venuesController.index)
  .post(venuesController.create)

router.route('/api/venues/:id')
  .get(venuesController.show)
  .patch(venuesController.update)
  .delete(venuesController.destroy)

//user routes
router.route('/api/users')
  .post(usersController.create)

router.route('/api/users/:id')
  .get(usersController.show)
  .patch(usersController.update)
  .delete(usersController.destroy)

module.exports = router

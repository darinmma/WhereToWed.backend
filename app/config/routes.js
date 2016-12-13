var express = require('express');
var router = express.Router();
var venuesController = require('../controllers/venues')

//api homepage
router.get('/', function(req, res, next) {
  res.render('index');
});

//api routes
router.route('/api/venues')
  .get(venuesController.index)
  .post(venuesController.create)

router.route('/api/venues/:id')
  .get(venuesController.show)
  .patch(venuesController.update)
  .delete(venuesController.destroy)

module.exports = router

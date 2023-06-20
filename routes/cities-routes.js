const router = require('express').Router();
const citiesController = require('../controllers/cities-controller');

router.route('/')
.get(citiesController.findCities);

module.exports = router;

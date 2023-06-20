const router = require('express').Router();
const attractionsController = require('../controllers/attractions-controller');

router.route('/')
.get(attractionsController.findAllAttractions);

router.route('/:cityId')
.get(attractionsController.findAttractionsByCity);

module.exports = router;
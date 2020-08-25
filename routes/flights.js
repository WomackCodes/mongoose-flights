const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

// go to details page (per Exercise 4, Lab 2) 
// TODO - STILL NEED CONTROLLER
router.post('/:id/destinations')

module.exports = router;


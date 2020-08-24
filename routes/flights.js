const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

/*      GET /flights/new       */
router.get('/new', flightsCtrl.new);
module.exports = router;

// POST to /flights
router.post('/', flightsCtrl.create)
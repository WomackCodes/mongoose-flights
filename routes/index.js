const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Mongoose Flights' });
});

module.exports = router;

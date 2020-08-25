var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Mongoose Flights' });
});

// Lesson had the following for Line 5:

// router.get('/', function (req, res, next) {
//   res.redirect('/flights');
// });


module.exports = router;

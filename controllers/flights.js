const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
};

function newFlight(req, res) {
    res.render('flights/new');
}

function create (req, res) {
    // remove spaces
    // req.body.cast.replace(/\s*, \s*/g, ',');
    // if (req.body.airline) req.body.airline = req.body.airline.split(',');
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // one way to handle errors
        if (err) return res.render('/flights/new');
        console.log(flight);
        // for now, redirect right back to the new.ejs
        res.redirect('/flights');
    })
}
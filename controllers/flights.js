const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}

function newFlight(req, res) {
    const newF = new Flight();
    const dt = newF.departs;
    const departsDate = dt.toISOString().slice(0,16);
    res.render('flights/new', {title: 'Add flight', departsDate});
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
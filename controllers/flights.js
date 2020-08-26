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
    Ticket.find({ flight: flight._id }, function (err, tickets) {
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
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) res.render('flights/new');
        res.redirect('/flights');
    })
}
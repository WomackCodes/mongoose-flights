const Flight = require('../models/flight');
const Ticket = require("../models/ticket");

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
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            const newFlight = new Flight();
            const dt = newFlight.departs;
            const departsDate = dt.toISOString().slice(0, 16);
            res.render("flights/show", {
                title: "Flight Details",
                flight,
                departsDate,
                tickets,
            });
        });
    });
}

function newFlight(req, res) {
    const newF = new Flight();
    const dt = newF.departs;
    const departsDate = dt.toISOString().slice(0,16);
    res.render('flights/new', {title: 'Add flight', departsDate});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) res.render("/flights/new");
    res.redirect("/flights/new");
  });
}
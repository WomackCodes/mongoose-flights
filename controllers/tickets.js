const Flight = require('../models/flight');
const Ticket = require("../models/ticket");


module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    res.render("tickets/new", { title: "Tickets", flightID: req.params.id });
}

function create(req, res) {
    let ticketObj = {
        seat: req.body.seat,
        price: req.body.price,
        flight: req.params.id,
    };
    const ticket = new Ticket(ticketObj);
    ticket.save(function (err) {
        if (err){
        res.render("tickets/new", { title: "Tickets", flightID: req.params.id });
        }
        res.redirect(`/flights/${req.params.id}`);
    });
}
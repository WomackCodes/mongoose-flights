const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets.js');

router.post("/flights/:id/tickets", ticketsCtrl.create);

module.exports = router;
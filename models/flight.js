const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    }, 
    arrival: {
        type: Date,
    },
}, {
    timestamps: true,
});

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Delta', 'Southwest', 'United'],
    }, 
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    }, 
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    }, 
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }, 
    },
    destinations: [destinationSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);
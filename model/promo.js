const mongoose = require('mongoose');
const promo = new mongoose.Schema({
    name: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    member: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'member'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('promo', promo);
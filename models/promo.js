const mongoose = require('mongoose');
const promoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('promo', promoSchema);
const mongoose = require('mongoose');
const date = new mongoose.Schema({
    date_day: {
        type: Date
    },
    codex: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('date', date);
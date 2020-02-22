const mongoose = require('mongoose');
const dateSchema = new mongoose.Schema({
    date_day: {
        type: Date,
        required: true
    },
    codex: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('date', dateSchema);
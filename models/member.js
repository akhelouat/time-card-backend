const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    promo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'promo'
    },
    info: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'info'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('member', memberSchema);
const mongoose = require('mongoose');
const member = new mongoose.Schema({
    userName: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    password: {
        type: String
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

module.exports = mongoose.model('member', member);
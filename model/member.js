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
    promo_id: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'promo' }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('member', member);
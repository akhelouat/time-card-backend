const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    /*
        promo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'promo'
        },
        info: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'info'
        }*/
}, {
    timestamps: true
})

module.exports = mongoose.model('member', memberSchema);
const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        default: '1234'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    addr: {
        type: String,
        required: true
    },
    cp: {
        type: Number
    },
    phone: {
        type: String,
        required: true
    },
    sign: {
        type: String,
    },
    picture: {
        type: String
    },
    idPole: {
        type: String
    },
    namePromo: {
        type: String,
        required: true
    },
    presence: {
        type: Array,
        required: true
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('member', memberSchema);
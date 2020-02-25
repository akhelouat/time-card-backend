const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
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
    email: {
        type: String
    },
    addr: {
        type: String
    },
    cp: {
        type: Number
    },
    phone: {
        type: Number
    },
    sign: {
        type: String
    },
    picture: {
        type: String
    },
    idPole: {
        type: String
    },
    namePromo: {
        type: String
    },
    presence: {
        type: Array
    } 
    
}, {
    timestamps: true
})

module.exports = mongoose.model('member', memberSchema);
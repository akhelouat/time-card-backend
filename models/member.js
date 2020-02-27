const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: '1234'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    mail: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    addressCP: {
        type: Number,
        default: 0
    },
    mobileNumber: {
        type: Number,
        default: 0
    },
    sign: {
        type: String,
        default: ''
    },
    picture: {
        type: String,
        default: ''
    },
    poleEmploiNumber: {
        type: String,
        default: ''
    },
    namePromo: {
        type: String,
        default: ''
    },
    presence: {
        type: Array,
        default: []
    } 
    
}, {
    timestamps: true
})

module.exports = mongoose.model('member', memberSchema);
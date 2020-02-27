const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
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
    mail: {
        type: String
    },
    address: {
        type: String
    },
    addressCP: {
        type: Number
    },
    mobileNumber: {
        type: Number
    },
    sign: {
        type: String
    },
    picture: {
        type: String
    },
    poleEmploiNumber: {
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
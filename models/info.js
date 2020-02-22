const mongoose = require('mongoose');
const infoSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    email: {
        type: String
    },
    addr: {
        type: String
    },
    cp: {
        type: BigInt
    },
    phone: {
        type: String
    },
    sign: {
        type: String
    },
    picture: {
        type: String
    },
    idPole: {
        type: String
    },/*
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'member'
    }*/
}, {
    timestamps: true
})

module.exports = mongoose.model('info', infoSchema);
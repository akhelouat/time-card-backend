const mongoose = require('mongoose');
const info = new mongoose.Schema({
    name: {
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
    },
    member_id: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'member' }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('info', info);
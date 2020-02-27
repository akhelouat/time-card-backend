const express = require('express')
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose')
router.use(bodyParser.json())
const memberController = require('./controllers/member')
const promoController = require('./controllers/promo')

// Mongoose connection
mongoose.connect('mongodb+srv://time:odcOM1p8IEECJYvS@cluster0-b8zrh.gcp.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

// Promo
router.post('/api/addPromo', promoController.addPromo)
router.get('/api/getPromo', promoController.getPromo)
router.put('/api/updatePromo', promoController.updatePromo)
router.delete('/api/deletePromo', promoController.deletePromo)

// Member
router.post('/api/addMember', memberController.addMember)
router.get('/api/getMember', memberController.getMember)
router.get('/api/getOneMember', memberController.getOneMember)
router.get('/api/getMemberByPromo', memberController.getMemberByPromo)
router.put('/api/updateMember', memberController.updateMember)
router.delete('/api/deleteMember', memberController.deleteMember)

module.exports = router
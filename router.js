const express = require('express')
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose')
router.use(bodyParser.json())
const memberController = require('./controllers/member')
const promoController = require('./controllers/promo')
require('dotenv').config();
// Mongoose connection
mongoose.connect(process.env.DB_IDENTIFERS, {
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
router.get('/api/getOneMember/:_id', memberController.getOneMember)
router.get('/api/getMemberByPromo/:promo', memberController.getMemberByPromo)
router.post('/api/login', memberController.login)
router.put('/api/updateMember', memberController.updateMember)
router.post('/api/setUnsigned', memberController.setUnsigned)
router.delete('/api/deleteMember', memberController.deleteMember)
router.put('/api/changePassword', memberController.changePassword)

module.exports = router
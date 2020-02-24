const express = require('express')
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose')
router.use(bodyParser.json())
const dateController = require('./controllers/date')
const memberController = require('./controllers/member')
const promoController = require('./controllers/promo')
const infoController = require('./controllers/info')

// Mongoose connection
mongoose.connect('mongodb+srv://abdel:3wRrhcbY96MCdRD@cluster0-axmws.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

// Promo
router.post('/add/promo', promoController.addPromo)
router.get('/get/promo', promoController.getPromo)
router.put('/update/promo', promoController.updatePromo)
router.delete('/delete/promo', promoController.deletePromo)

// Info
router.post('/add/info', infoController.addInfo)
router.get('/get/info', infoController.getInfo)
router.put('/update/info', infoController.updateInfo)
router.delete('/delete/info', infoController.deleteInfo)

// Member
router.post('/add/member', memberController.addMember)
router.get('/get/member', memberController.getMember)
router.put('/update/member', memberController.updateMember)
router.delete('/delete/member', memberController.deleteMember)

// Date
router.post('/add/date', dateController.addDate)
router.get('/get/date', dateController.getDate)
router.put('/update/date', dateController.updateDate)

module.exports = router
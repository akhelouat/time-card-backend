const express = require('express')
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose')
router.use(bodyParser.json())
const memberController = require('./controllers/member')
const promoController = require('./controllers/promo')

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
router.post('/api/addPromo', promoController.addPromo)
router.get('/api/getPromo', promoController.getPromo)
router.put('/api/updatePromo', promoController.updatePromo)
router.delete('/api/deletePromo', promoController.deletePromo)

// Member
router.post('/api/addMember', memberController.addMember)
router.get('/api/getMember', memberController.getMember)
router.put('/api/updateMember', memberController.updateMember)
router.delete('/api/deleteMember', memberController.deleteMember)

module.exports = router
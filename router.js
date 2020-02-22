const express = require('express');
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose');
router.use(bodyParser.json());
const dateController = require ('./controllers/date')
const memberController = require ('./controllers/member')
const promoController = require ('./controllers/promo')
const infoController = require ('./controllers/info')
mongoose.connect('mongodb://localhost:27017/timecard', 
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

router.post('/add/promo', promoController.addPromo);
router.get('/get/promo', promoController.getPromo)
 
router.post('/add/info', infoController.addInfo);
router.get('/get/info', infoController.getInfo)

  
router.post('/add/member', memberController.addMember);
router.get('/get/member', memberController.getMember)
  
router.post('/add/date', dateController.addDate);
router.get('/get/date', dateController.getDate)

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser')
const router = express()
const mongoose = require('mongoose');
router.use(bodyParser.json());
const dateController = require ('./controllers/date')
const Member = require('./models/member')
mongoose.connect('mongodb://localhost:27017/timecard', 
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

router.post('/add/member', (req, res, next) => {
    const member = new Member({
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        promo:req.body.promo,
        info:req.body.info
        });
                  const myvar = req.body.date_day
                  member.save()
                .then(() => res.status(201).send({ myvar}))
                .catch(error => res.status(400).send({ error }));
          
            
        

});

router.get('/get/member', (req, res, next) => {
    Member.find()
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({ Member }));
  
          
            
        

});
  

router.post('/add/date', dateController.addDate);



router.get('/get/date', dateController.getDate)


    
    
module.exports = router;

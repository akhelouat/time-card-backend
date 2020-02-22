const express = require('express');
const bodyParser = require('body-parser')
const router = express()
var usersMocks = require('./mocks');
const date = require('./controllers/date.js')
const mongoose = require('mongoose');
router.use(bodyParser.json());
const dateController = require ('./controllers/date')
const memberController = require ('./controllers/member')
mongoose.connect('mongodb://localhost:27017/timecard', 
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

router.get('/getDate', dateController.getDate,);
router.post('/addDate', dateController.addDate);

router.get('/api/getData', (req, res, next) => {
        res.status(200).json(usersMocks)
        next();
    });

router.post('/addMember', memberController.addMember);
//router.get('/getMember', memberController.getMember);





router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });


router.get('/', dateControl => {
    res.send('le serveur fonctionne bien')
    });


    
    

    
router.post('/api/sendData', (req, res) => {
        if (req.body)
        {
            res.status(201).send('Les données ont bien étés enregistrés !')
        }
        else
        {
            res.status(500).send('erreur ! pas de données reçues')
        }
    });
    
module.exports = router;

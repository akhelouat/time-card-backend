const express = require('express');
const bodyParser = require('body-parser')
const router = express();
var usersMocks = require('./mocks');
const date = require('./controllers/date.js')
const mongoose = require('mongoose');
router.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/timecard', 
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const TmDate = require('./models/date')


router.post('/add', (req, res, next) => {
    const date = new TmDate({
      date_day: req.body.date_day,
      codex: req.body.codex
    });
    const myvar = req.body.date_day
  date.save()
  .then(() => res.status(201).json({ myvar}))
  .catch(error => res.status(400).json({ error }));
});

router.get('/get', (req, res, next) => {
    TmDate.find()
    .then(TmDate => res.status(200).json(TmDate))
    .catch(TmDate => res.status(400).json({ TmDate }));
    });

router.post('/date/create',date.create);
router.post('/date/find',date.find);



router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });


router.get('/', dateControl => {
    res.send('le serveur fonctionne bien')
    });


    
    
router.get('/api/getData', (req, res) => {
        res.status(200).json(usersMocks)
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

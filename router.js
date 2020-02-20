const express = require('express');
const bodyParser = require('body-parser')
const router = express();
var usersMocks = require('./mocks');
const date = require('./controllers/date.js')


router.use(bodyParser.json());

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

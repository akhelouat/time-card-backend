var express = require('express');
var app = express();
var port = 3000;
var usersMocks = require('./mocks');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });


app.get('/', (req, res) => {
    res.send('le serveur fonctionne bien')
    });

app.get('/api/getData', (req, res) => {
    res.status(200).json(usersMocks)
});

app.post('/api/sendData', (req, res) => {
    if (req.body)
    {
        res.status(201).send('Les données ont bien étés enregistrés !')
    }
    else
    {
        res.status(500).send('erreur ! pas de données reçues')
    }
});

app.listen(port, console.log('listen on' + port));

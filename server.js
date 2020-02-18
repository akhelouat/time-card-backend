var express = require('express');
var app = express();
var port = 3000;
var usersMocks = require('./mocks');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('le serveur fonctionne bien')
    });

app.get('/api/getData', (req, res) => {
    res.status(200).json(usersMocks)
});

app.post('/api/sendData', (req, res) => {
    res.status(201).send('Les données ont bien étés enregistrés !')
});

app.listen(port, console.log('listen on' + port));

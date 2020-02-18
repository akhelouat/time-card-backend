var express = require('express');
var app = express();
var port = 3000;
var usersMocks = require('./mocks');

app.get('/', (req, res) => {
    res.send('le serveur fonctionne bien')
    });

app.get('/api/getData', (req, res) => {
    res.status(200).json(usersMocks)
});

app.listen(port, console.log('listen on' + port));

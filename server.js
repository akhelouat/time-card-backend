var express = require('express');
var app = express();
var port = 3000;

data = 'MOCK';

app.get('/', (req, res) => {
    res.send('le serveur fonctionne bien')
    });

app.get('/api/getData', (req, res) => {
res.send(data)
});

app.listen(port, console.log('listen on' + port));

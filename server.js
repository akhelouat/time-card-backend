
const http = require('http');
const port = 3000;
const router = require('./router')
const server = http.createServer(router)
var cron = require('node-cron')

cron.schedule('*/2 * * * *', () => {
    // mettre la fonction ici
  });

server.listen(port)
console.log('le server écoute sur le port ' + port)
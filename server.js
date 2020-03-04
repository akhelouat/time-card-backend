
const http = require('http');
const port = 3000;
const router = require('./router')
const server = http.createServer(router)
const cron = require('node-cron')
const axios = require('axios')


cron.schedule('0 1 * * *', () => {
  console.log('fonction axios qui va se lancer automatiquement chaque matin')
}, {
  scheduled: true,
  timezone: "Europe/Paris"
});

server.listen(port)
console.log('le server écoute sur le port ' + port)
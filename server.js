
const http = require('http');
const port = 3000;
const router = require('./router')
const server = http.createServer(router)
const cron = require('node-cron')
const axios = require('axios')

cron.schedule('0 7 * * *', () => {
  axios.post('http://localhost:3000/api/setUnsigned').then(() => {
    console.log('ça fonctionne');
  }).catch(() => {
    console.log('ça ne fonctionne pas')
  });
}, {
  scheduled: true,
  timezone: "Europe/Paris"
});

server.listen(port)
console.log('le server écoute sur le port ' + port)
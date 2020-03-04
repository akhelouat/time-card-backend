
const http = require('http');
const port = 3000;
const router = require('./router')
const server = http.createServer(router)
const cron = require('node-cron')
const axios = require('axios')


cron.schedule('0 7 * * *', () => {
  axios.put('/api/setUnsigned')
  .then( () => {
    console.log("le cron s'est bien lancé")
  })
  .catch( () => {
    console.log("erreur, le cron n'a pas fonctionné")
  })
}, {
  scheduled: true,
  timezone: "Europe/Paris"
});

server.listen(port)
console.log('le server écoute sur le port ' + port)
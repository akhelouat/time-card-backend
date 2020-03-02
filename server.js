/**
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-27 13:19:14
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-02 16:15:26
 * @ Description:
 */

const http = require('http');
const port = 3000;
const router = require('./router')
const server = http.createServer(router)
var CronJob = require('cron').CronJob;

var job = new CronJob('00 00 08 * * *', function() {
        // actualisation
    }, function() {
        /* cron stop funct */
    },
    true
);

server.listen(port)
console.log('le server écoute sur le port ' + port)
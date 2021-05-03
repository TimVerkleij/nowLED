// const Express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const app = Express()

// const dotenv = require('dotenv');
// dotenv.config();

// app.use(cors())
// app.use(bodyParser())
// app.use(require('./routes/api'))

// console.log("listening on port: " + process.env.PORT)
// app.listen(process.env.PORT);


var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

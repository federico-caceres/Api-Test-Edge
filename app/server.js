var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config();

var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var router = require('./routes')
app.use('/api', router)

app.listen(port)
console.log('API escuchando en el puerto ' + port)
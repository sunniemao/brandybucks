var express = require('express')
var app = express()
var bookshelf = require('./config.js')


app.use(express.static(__dirname + '/../src/client'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
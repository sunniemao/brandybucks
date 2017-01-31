var express = require('express')
var app = express()

var bookshelf = require('./config.js')

var bodyParser = require('body-parser');
var router = require('./routes.js');



// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


// Set up our api routes
app.use('/api', router);

app.use(express.static(__dirname + '/../client'));

var bookshelf = require('./config.js')

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
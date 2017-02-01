var express = require('express');
var app = express();

var path = require('path');

var bookshelf = require('./config.js');

var bodyParser = require('body-parser');
var router = require('./routes.js');


// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


// catch anything named correctly in /../client
app.use(express.static(__dirname + '/../client'));

// Set up our api routes
app.use('/api', router);

// catch any other urls and send to index.html in /../client
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

module.exports = app;
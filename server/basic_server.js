var express = require('express')
var app = express()

var bookshelf = require('./config.js')

var bodyParser = require('body-parser');

var User = require('./models/user');


// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

var bookshelf = require('./config.js')

// app.post('api/signup')
app.post('/api/login', function(req, res) {
  var first_name = req.body.first_name;
  var password = req.body.password;

//   console.log(req.body)
//   console.log('username', username);
//   console.log('password', password);

//   res.send('ok');


  new User({ first_name: first_name })
    .fetch()
    .then(function(user) {
      if (!user) {
        res.send('no user by that name')
        // res.redirect('/login');
      } else {
        res.send('IS user by that name')
        // BASIC VERSION
        // bcrypt.compare(password, user.get('password'), function(err, match) {
        //   if (match) {
        //     util.createSession(req, res, user);
        //   } else {
        //     res.redirect('/login');
        //   }
        // });
        // ADVANCED VERSION -- see user model
        // user.comparePassword(password, function(match) {
        //   if (match) {
        //     util.createSession(req, res, user);
        //   } else {
        //     res.redirect('/login');
        //   }
        // });
      }
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
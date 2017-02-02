var express = require('express');
var app = express();

var path = require('path');

var session = require('express-session')

var bookshelf = require('./config.js');

var bodyParser = require('body-parser');
var authRouter = require('./authRoutes.js');


var authRedirectMiddleware = function(req, res, next){
  if(!req.session) {
    // console.log('req.session.level in authRedirectMiddleware', req.session)

    console.log('!req.session')
    app.use(session(sess));

    console.log('req.session in authRedirectMiddleware', req.session)



    res.redirect('/login');
  } else if (req.session.level !== 'loggedIn') {
    console.log("req.session.level !== 'loggedIn'")
    res.redirect('/login');
  }
};

////
// express-sessions
////

var sess = {
  secret: 'bbucsecRit',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}

if (app.get('env') === 'production') {
  // app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

// app.use(session(sess))

///
// end express-sessions
///



// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/login', function(req, res) {
  // console.log('req.session from /login', req.session)
  res.sendFile(path.join(__dirname, './authViews', 'login.html'));
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, './authViews', 'signup.html'));
});

// Set up our login/logout api routes
app.use('/authApi', authRouter);


// if no session token yet, redirect back to auth area
app.use(authRedirectMiddleware);









// catch anything named correctly in /../client
app.use(express.static(__dirname + '/../client'));

// Set up the rest of our api routes
// app.use('/api', router);



// catch any other urls and send to index.html in /../client
app.get('*', function(req, res) {

  console.log('from wildcard route!! ', req.session)
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
  // res.redirect('/login')
  // res.sendFile(path.join('./authViews/login.html'));
});



// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

module.exports = app;
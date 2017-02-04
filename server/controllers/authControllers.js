var User = require('../models/user');
var knex = require('../config.js').knex;
var Student = require('../models/student');


module.exports = {

  login: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;

      new User({ username: username })
        .fetch()
        .then(function(user) {
          if (!user) {
            // res.send('no user by that name')
            res.redirect('/')
          } else {

            user.comparePassword(password, function(match) {
              if (match) {

                // set the permissions level
                req.session.level = 'loggedIn'

                res.redirect('/')

              } else {
                res.redirect('/')
              }
            });
          }
        });
    }
  },

  signup: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;

      new User({ username: username })
        .fetch()
        .then(function(user) {
          if (!user) {

            var newUser = new User({
              username: username,
              password: password
            });

            newUser.save()
              .then(function(newUser) {

                // TODO: this would really trigger an email to an admin
                // who would grant access

                // set the permissions level (for now)
                req.session.level = 'loggedIn'

                res.redirect('/');
              });
          } else {
            // res.send('Account already exists');
            res.redirect('/signup');
          }
        });
    }
  },

  logout: {

    get: function(req, res) {

      req.session.destroy(function(err) {
        res.redirect('/');
      })
    }
  }
}


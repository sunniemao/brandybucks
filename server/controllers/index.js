var User = require('../models/user');

module.exports = {

  login: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var password = req.body.password;

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
    }
  },

  signup: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var password = req.body.password;

      new User({ first_name: first_name })
        .fetch()
        .then(function(user) {
          if (!user) {
            // BASIC VERSION
            // bcrypt.hash(password, null, null, function(err, hash) {
            //   Users.create({
            //     username: username,
            //     password: hash
            //   }).then(function(user) {
            //       util.createSession(req, res, user);
            //   });
            // });
            // ADVANCED VERSION -- see user model
            var newUser = new User({
              first_name: first_name,
              password: password
            });
            newUser.save()
              .then(function(newUser) {
                // util.createSession(req, res, newUser);
                res.send('new user created')
              });
          } else {
            res.send('Account already exists');
            // res.redirect('/signup');
          }
        });
    }
  }
}


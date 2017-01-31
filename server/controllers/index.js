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

  }
}

// var models = require('../models');

// module.exports = {

//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(err, results) {
//         if (err) { /* do something */ }
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.message, req.body.username, req.body.roomname];
//       models.messages.post(params, function(err, results) {
//         if (err) { /* do something */ }
//         res.sendStatus(201);
//       });
//     }
//   },

//   users: {
//     get: function (req, res) {
//       models.users.get(function(err, results) {
//         if (err) { /* do something */ }
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.username];
//       models.users.post(params, function(err, results) {
//         if (err) { /* do something */ }
//         res.sendStatus(201);
//       });
//     }
//   }
// };


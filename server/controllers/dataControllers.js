var User = require('../models/user');
var knex = require('../config.js').knex;

var Student = require('../models/student');



module.exports = {

  query: {

    post: function(req, res) {
      var queryString = req.body.name;
      knex('students').where({
        first_name: queryString})
        .select('*').then(function(data){
          res.send(data);
        })

    }
  },

  studentInfo: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var last_name = req.body.last_name;
      var grade = req.body.grade;
      var IEP = req.body.IEP;
      var pic = req.body.pic;

      new Student({first_name: first_name})
      .fetch()
      .then(function(student) {
        if (!student) {
          var newStudent = new Student ({
            first_name: first_name,
            last_name: last_name,
            grade: grade,
            IEP: IEP,
            pic: pic
          })
          newStudent.save()
              .then(function(newUser) {
                // util.createSession(req, res, newUser);
                res.send('new student created')
              });
          } else {
            res.send('Account already exists');
            // res.redirect('/signup');
        }
      })
    },

    get: function(req, res) {
      knex('students').select('*').then(function(data){
        res.send(data);
      })
    }
  }
}


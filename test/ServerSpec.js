var expect = require('chai').expect;
var request = require('request');

var app = require('../server/basic_server.js');

describe('server', function() {

  var server;

  before(function() {
    server = app.listen(4570, function() {
      console.log('Brandybucks is listening on 4570');
    });
  });

  after(function() {
    server.close();
  });

  it('should respond to GET requests for / with a 200 status code', function(done) {
    request('http://127.0.0.1:4570', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
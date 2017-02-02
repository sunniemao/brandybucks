var db = require('../config');
var Log = db.Model.extend({

  tableName: 'logs'

});

module.exports = Log;
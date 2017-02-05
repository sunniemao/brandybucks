var fakeData = require('../fakeData/fakeData.json');
var fakeLogData = require('../fakeData/fakeLogData.json');
var Log = require('./models/log')


var knex = require('./config.js').knex;

for(var i=0; i < fakeData.length; i++) {
	knex('students').insert(fakeData[i])
	.then(function(){
		console.log('student data saved');
	})
}


// knex.batchInsert('students', fakeData)
// .then(function(err) {
// 	if(err){
// 		console.log('error has occured in inserting fakeData');
// 		throw err;
// 	} else {
// 		console.log('fakeData inserted successfully!')
// 	}
// });

// console.log(fakeLogData.length);

for(var i=0; i < fakeLogData.length; i++) {


	knex('logs').insert(fakeLogData[i])
	.then(function(){
		console.log('log saved');
	})

	knex('students')
    .where('id', '=', fakeLogData[i].student_id)
    .increment('logCount', 1)
    .then(function() {
      console.log('info updated');
  });

}





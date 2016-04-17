var filterFileName = require('./mymodule.js');
var directory = process.argv[2];
var filterExt = process.argv[3];

filterFileName(directory, filterExt, function(err, list){
	if(err){
		throw err;
	}

	list.forEach(function(filename){
		console.log(filename);
	})
})
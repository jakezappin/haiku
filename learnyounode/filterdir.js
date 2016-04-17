var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(err, list){
	if(err){
		throw err;
	}

	list.forEach(function(filename){
		var ext = path.extname(filename);
		if(ext === '.' + extension){
			console.log(filename);
		}
	});
});
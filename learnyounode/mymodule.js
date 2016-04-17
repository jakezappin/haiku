var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list){
		if (err){
			throw err;
		} 

		var checkExt = '.' + ext;
		var output = [];

		var output = list.filter(function(filename) {
			return path.extname(filename) === '.' + ext;
        });

		return callback(null, output);
	})
}
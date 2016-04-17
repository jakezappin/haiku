var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list){
		if (err){
			throw err;
		} 

		var checkExt = '.' + ext;
		var output = [];

		for(var i = 0; list.length; i++){
			if(path.extname(list[i]) === checkExt){
				output.push(list[i]);
			}
		}

		return callback(null, output);
	})
}
var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');
var library = formatData(cmudictFile);
var syllablesLibrary = createSyllablesLibrary(library);
var haiku = [];

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function formatData(data){
	var wordList = {};
	var lines = data.toString().split('\n');
	var lineSplit;

	lines.forEach(function(line){

		lineSplit = line.split(" ");
		var word = lineSplit[0];

		if(lineSplit[1] === true){

			lineSplit[1] = lineSplit[1].split(" ");

			var syllables = 0; 

			lineSplit[1].forEach(function(phoneme){
				if(phoneme.match(/\d/) === true){
					syllables++;
				}
			});

			if(syllables !== 0 && syllables < 8){
				wordList.push(word);
				wordList[word] = syllables;
			}
		}

	})

	return wordList

}

formatData(cmudictFile);

function createSyllablesLibrary(lib){
	var syllableArray = [];

	for(var word in lib){
		var index = lib[word];
		if(syllableArray[index] === undefined){
			syllableArray[index] = [];
		}
			
		syllableArray[index].push(word);
	}

	return syllableArray;
}


function createHaiku(structure, syllablesArr){

	haiku = structure.map(function(lines){
		return lines.map(function(syllables){
			return syllablesArr[syllables][Math.floor(Math.random()*syllablesArr.length)];
		}).join(' ');
	}).join('\n');

	console.log('HELLO');
	return haiku;
}



module.exports = {
	createHaiku: createHaiku,
	syllablesLibrary: syllablesLibrary,
	cmudictFile: cmudictFile,
};
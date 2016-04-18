
var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');
var library = formatData(cmudictFile);
var syllablesLibrary = createSyllablesLibrary(library);

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function formatData(data){
	var wordList = {};
	var lines = data.toString().split('\n');
	var lineSplit;

	lines.forEach(function(line){

		lineSplit = line.split("  ");
		var word = lineSplit[0];

		if(lineSplit[1]){

			lineSplit[1] = lineSplit[1].split(" ");

			var syllables = 0; 

			lineSplit[1].forEach(function(phoneme){
				if(phoneme.match(/\d/)){
					syllables++;
				}
			});

			if(syllables !== 0 && syllables < 8){
				wordList[word] = syllables;
			}
		}

	})

	return wordList;

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

  	var arrOfWords;
  	return structure.map(function(lines){
    	return lines.map(function(syls){
    	  arrOfWords = syllablesArr[syls];
    	  return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    	}).join(' ');
 	 }).join('\n');

}



module.exports = {
	createHaiku: createHaiku,
	syllablesLibrary: syllablesLibrary,
	cmudictFile: cmudictFile,
};
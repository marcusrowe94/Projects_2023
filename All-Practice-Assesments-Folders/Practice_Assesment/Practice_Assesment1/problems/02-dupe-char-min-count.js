/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	let obj = {}
	let array = string.split('')

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if(obj[element]=== undefined){
			obj[element] = 1
		}

		else {obj[element] += 1}

	}
	return obj
}

function duplicateCharMinCount(string, minCount) {
	let results = []
let letterCounter = countCharacters(string)
for( let letter in letterCounter){
if(letterCounter[letter] >= minCount ){
	results.push(letter)
}
}
return results

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;

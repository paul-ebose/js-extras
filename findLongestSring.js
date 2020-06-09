// turn to array seperating each element by whitespace
// sort the array, a-b is ASC .. b-a is DESC
// returns the first(which is now the longest) element of the array

const findLongestSring = (input) => {
	const strArray = input.split(' ')
	const sortedStringArray = strArray.sort((a, b) => b.length - a.length)
	return sortedStringArray[0]
}

findLongestSring('the quick brown fox jumped over the lazy dog')

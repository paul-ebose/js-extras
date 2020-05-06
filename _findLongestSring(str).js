
const findLongestSring = (input) => {
	const str = input,
		strArray = str.split(' '),		// turns to an array seperating each element by whitespace
		sortedStringArray = strArray.sort((a, b) => b.length - a.length)		// a-b is ASC, b-a is DESC

	return sortedStringArray[0]		// returns the first(which is now the longest) element of the array
}

findLongestSring('the quick brown fox jumped over the lazy dog')
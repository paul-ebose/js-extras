
const isContainNumber = (num, arr) => {
	let isTrue, isNum = num , total = 0		// declare variables...change isNum to set the number to look for in the arguments or as total
	for (item of arr) { item === isNum ? isTrue = true : total += item	}		// loop through to store truthy if isNum(the number is present) and add all numbers
	const answer = isTrue || total === isNum ? true : false		// store what to return if isNum(the specified number) is present or total == isNum AND if none of the above

	return answer		// return the value (true) or (false)
}

isContainNumber(21, [2,34,12,56,21,89,1,0,35,21])
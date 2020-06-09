// loop through to check if num is in array
// return true and break out of the loop

const isContainNumber = (num, arr) => {
	let result = false
	for (item of arr) {
		if (item === num) {
			result = true
			break
		}
	}
	return result
}

isContainNumber(0, [2,34,12,56,21,89,1,0,35,21])

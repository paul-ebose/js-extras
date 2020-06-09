// finds missing numbers from an array
// flatten array with Infinity to be as flat as possible
// filter duplicates with Sets
// change back to ordered iterable(Array) and sort(ASC)
// loop through sorted array to store into a new array, an array of gaps [gap starts at this num, gap-length]
// loop through gaps array to sort out missing numbers with its gap-length
// console.log() variables to understand and debug

const missingNumber = (...arr) => {
  arr = Array.from(new Set(arr.flat(Infinity))).sort((a,b) => a - b)
  let firstElement = arr[0]
  let missingArray = []
  let missing = []
  arr.forEach(num => {
    if (num === firstElement) firstElement++
    else {
      missingArray.push([ firstElement, num - firstElement ])
      firstElement = ++num
    }
  } )
  missingArray.forEach(([num, gap]) => {
    for (let x = 0; x < gap; x++) {
      missing.push(num) // 14,15
      num++
    }
  })
  return missing
}

// const numbers = [3,9,10,11,12,13,14,16,17,18,19,21,22,24,4,7,5,5,1,5,5,4,4,3,1,1]  // [2, 6, 8, 15, 20, 23]
missingNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20])

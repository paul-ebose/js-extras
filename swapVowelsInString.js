// there is another nice way which done is by using pointers
// this is also good, plus i really **** my brain up to get this

const swapVowelsInString = (inputString) => {
  if (typeof inputString === 'string') {
    // regex patterns
    const vowelsMatchPattern = /[aeiou]/gi
    const vowelsTestPattern = /[aeiou]/i

    // populate vowelsArray
    let vowelsArray = inputString.match(vowelsMatchPattern)

    // REARRANGE VOWELS_ARRAY
    if (vowelsArray.length % 2 === 0) {
      // even number length
      const firstPartStr = vowelsArray.splice(0, vowelsArray.length / 2)
      vowelsArray.reverse()
      vowelsArray.push(firstPartStr.reverse())
      vowelsArray = vowelsArray.flat(Infinity)
    } else {
      // odd number length
      const firstPartStr = vowelsArray.splice(0, (vowelsArray.length - 1) / 2)
      const secondPartStr = vowelsArray.splice(1)
      vowelsArray.push(firstPartStr.reverse())
      vowelsArray.unshift(secondPartStr.reverse())
      vowelsArray = vowelsArray.flat(Infinity)
    }

    // populate a new string
    let stringText = ''
    for (const char of inputString) {
      vowelsTestPattern.test(char)
        ? (stringText += vowelsArray.shift())
        : (stringText += char)
    }

    // return the new string
    return stringText
  } else return 'Please input a string'
}

swapVowelsInString('journal')   // o,u,a -> a,u,o
swapVowelsInString('apples and oranges')    // a,e,a,o,a,e -> e,a,o,a,e,a
swapVowelsInString('felix and you')   // e,i,a,o,u -> u,o,a,i,e
swapVowelsInString('pineapples and oranges')    // i,e,a,e,a,o,a,e -> e,a,o,a,e,a,e,i

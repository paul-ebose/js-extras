// filter duplicates using Sets
// change Set back to string

const removeDuplicateChars = (inputString) => {
  if (typeof inputString === 'string') {
    const stringSet = new Set(inputString)
    let stringText = ''
    for (const char of stringSet) stringText += char
    return stringText
  } else return 'Please input a string'
}

removeDuplicateChars('lorem ipsum')

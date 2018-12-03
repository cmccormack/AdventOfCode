// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\s+/)

module.exports = (str, start=0) => {

  const arr = stringCleaning(str)

  const arrlen = arr.length
  const strlen = arr[0].length

  // Iterate over each string character
  for (i=0; i < strlen; i+=1) {
    // Create new array with a single character at the same index omitted
    const slicedArr = arr.map(v => v.slice(0, i) + v.slice(i + 1))

    // If set size is smaller than array, you've found the single different char
    if (new Set(slicedArr).size < arrlen) {
      const obj = {}

      // Find the matching strings using existence in object
      for (str of slicedArr) {
        if (obj[str]) { // match found
          return str
        }
        obj[str] = true
      }
    }
  }
}

/*
dabAcCaCBAcCcaDA
*/

// Reuse solution1
const solution1 = require('../puzzle1/solution')

// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\r?\n+/)

module.exports = (str, start = 0) => {

  let polymer = stringCleaning(str)[0]

  const [lower, upper] = ['A', 'Z'].map(letter => letter.charCodeAt(0))

  let minLength = Infinity
  // Iterate over alphabet, remove letter ignoring case, and test against solution1
  for (let i=lower; i < upper; i+=1) {
    const letter = String.fromCharCode(i)
    const replace = new RegExp(`${letter}`, 'ig')

    let length = solution1(polymer.replace(replace, ''))
    if (length < minLength) {
      minLength = length
    }
  }

  return minLength
}

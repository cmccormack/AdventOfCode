/*
dabAcCaCBAcCcaDA
*/

// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\r?\n+/)

module.exports = (str, start=0) => {

  let polymer = stringCleaning(str)[0]

  const lowerExtent = [97, 122]
  const upperExtent = [65, 90]

  console.log(polymer)

  let i = 0

  while (polymer[i]) {
    const len = polymer.length
    
    // Last character of the polymer, return early
    if (!polymer[i+1]) {
      return len
    }

    // Assign the next two units to temporary variables
    const [a,b] = polymer.slice(i, i+2)
    
    // first character is lowercase
    if (a.charCodeAt(0) >= lowerExtent[0]) {
      if(a.toUpperCase() === b) {
        polymer = polymer.slice(0, i) + polymer.slice(i+2)
        i-=2
      }
    }

    // first character is uppercase
    if (a.charCodeAt(0) <= upperExtent[1]) {
      if (a.toLowerCase() === b) {
        polymer = polymer.slice(0, i) + polymer.slice(i+2)
        i-=2
      }
    }

    i = i < 0 ? 0 : i+1

    if (i > len) {
      return len
    }
  }
  
  return len
}

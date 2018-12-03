// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\r?\n+/)


/*

#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2

*/

module.exports = (str, start=0) => {

  const arr = stringCleaning(str).map(str => {

    const coords = {}
    
    // Parse strings into rectangle coordinates and size
    const [x,y] = str.match(/(\d+,\d+)/g)[0].split(',').map(Number)
    const [width,height] = str.match(/(\d+x\d+)/)[0].split('x').map(Number)

    // for ()
  })

  return null
}

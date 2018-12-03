// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\r?\n+/)


/*

#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2

*/

module.exports = (str, start=0) => {

  const claims = stringCleaning(str)
  const coords = {}
  
  // Loop over all claims to add coordinates to coords
  claims.forEach(claim => {

    // Parse strings into rectangle coordinates and size
    const [x,y] = claim.match(/(\d+,\d+)/g)[0].split(',').map(Number)
    const [width,height] = claim.match(/(\d+x\d+)/)[0].split('x').map(Number)


    for (let row = y; row < height + y; row+=1) {
      for (let col = x; col < width + x; col+=1) {
        const coord = `${row},${col}`
        coords[coord] = coords[coord] ? coords[coord] + 1 : 1
      }
    }
  })

  return Object.values(coords).filter(count => count > 1).length
}

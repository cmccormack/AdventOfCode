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
  const candidates = new Set()
  
  // Loop over all claims to add coordinates to coords
  claims.forEach(claim => {

    // Parse strings into id, rectangle coordinates, and rectangle size
    const id = claim.match(/#(\d+)/g)[0].slice(1)
    const [x,y] = claim.match(/(\d+,\d+)/g)[0].split(',').map(Number)
    const [width,height] = claim.match(/(\d+x\d+)/)[0].split('x').map(Number)

    candidates.add(id)

    for (let row = y; row < height + y; row+=1) {
      for (let col = x; col < width + x; col+=1) {
        const coord = `${row},${col}`
        if (coords[coord]) {
          coords[coord].count += 1
          coords[coord].ids.push(id)
          coords[coord].ids.forEach(id => candidates.delete(id))
        } else {
          coords[coord] = {count: 1, ids: [id]}
        }
      }
    }
  })

  return candidates.values().next().value

}


module.exports = (str, start=0) => {

  const checksum = {}

  // Trim and split input into an Array
  const arr = str.trim().split(/\s+/)

  // Sort letters in each word to group
  .map(v => v.split('').sort().join(''))
  
  // Match only entries with 2 or more letters in sequence
  .map(v => v.match(/(.+)\1+/g))

  // Remove any non-matches (null)
  .filter(v => v)

  // Convert arrays to Set to remove 
  .map(v => new Set(v.map(v => v.length)))

  // Iterate over each Set and increment checksum values
  .forEach(v => {
    void [...v.values()].forEach(v => {
      if (checksum[v] !== undefined) {
        return checksum[v] += 1
      }
      checksum[v] = 1
    })
  })

  // return product of checksum values for '2' and '3'
  return checksum['2'] * checksum['3']
}


module.exports = (str, current=0) => {
  const freqs = new Set([current])
  const arr = str.trim().split(/\s+/).map(Number)

  let counter = 0
  const max = 100000

  while(true) {
    for(let i=0; i < arr.length; i+=1) {
      current += arr[i]
      if (freqs.has(current)) {
        return current
      }
      freqs.add(current)
    }
    counter += 1
    if (counter >= max) {
      return "Maximum attempts exceeded"
    }
  }
}

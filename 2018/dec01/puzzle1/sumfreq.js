
module.exports = (str, start=0) => {
  const arr = str.trim().split(/\s+/).map(Number)
  return arr.reduce((a, v) => a += v, start)
}

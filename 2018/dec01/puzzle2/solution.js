const fs = require('fs')
const dupefreq = require('./dupefreq')

const infile = fs.readFileSync('./input.txt').toString()

console.log('Solution:', dupefreq(infile))
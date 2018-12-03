const fs = require('fs')
const solution = require('./solution')

const infile = fs.readFileSync('./input.txt').toString()

console.time('Running time')
console.log('Solution:', solution(infile))
console.timeEnd('Running time')
const fs = require('fs')
const solution = require('./solution')

const infile = fs.readFileSync('./input.txt').toString()

console.log('Solution:', solution(infile))
const fs = require('fs')
const sumfreq = require('./sumfreq')

const infile = fs.readFileSync('./input.txt').toString()

console.log('Solution:', sumfreq(infile))
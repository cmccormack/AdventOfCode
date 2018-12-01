/*
  +1, +1, +1 results in  3
  +1, +1, -2 results in  0
  -1, -2, -3 results in -6
*/

const assert = require('assert')
const sumfreq = require('./sumfreq')

describe('sumfreq', () => {
  it('should return the correct value for each test', () => {
    assert.equal(sumfreq('+1\n+1\n+1'), 3)
    assert.equal(sumfreq('+1\n+1\n-2'), 0)
    assert.equal(sumfreq('-1\n-2\n-3'), -6)
  })
})

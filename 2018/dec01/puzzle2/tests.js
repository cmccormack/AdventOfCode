/*
  +1, -1 first reaches 0 twice.
  +3, +3, +4, -2, -4 first reaches 10 twice.
  -6, +3, +8, +5, -6 first reaches 5 twice.
  +7, +7, -2, -7, -4 first reaches 14 twice.
*/

const assert = require('assert')
const dupefreq = require('./dupefreq')

describe('dupefreqs', () => {
  it('should return the correct value for each test', () => {
    assert.equal(dupefreq('+1\n-1'), 0)
    assert.equal(dupefreq('+3\n+3\n+4\n-2\n-4'), 10)
    assert.equal(dupefreq('-6\n+3\n+8\n+5\n-6'), 5)
    assert.equal(dupefreq('+7\n+7\n-2\n-7\n-4'), 14)
  })
})

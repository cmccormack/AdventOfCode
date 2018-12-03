/*
The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters 
(the second and fourth). However, the IDs fghij and fguij differ by exactly 
one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, 
  this is found by removing the differing character from either ID, 
  producing fgij.)
*/

const assert = require('assert')
const solution = require('./solution')

const testinput =
`
abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
`

describe('solution', () => {
  it('should return the checksum of the input strings', () => {
    assert.equal(solution(testinput), 'fgij')
  })
})

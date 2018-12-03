/*
The problem is that many of the claims overlap, causing two or more claims to 
cover part of the same areas. For example, consider the following claims:

#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
Visually, these claim the following areas:

........
...2222.
...2222.
.11XX22.
.11XX22.
.111133.
.111133.
........
The four square inches marked with X are claimed by both 1 and 2. (Claim 3, 
  while adjacent to the others, does not overlap either of them.)

If the Elves all proceed with their own plans, none of them will have enough 
fabric. How many square inches of fabric are within two or more claims?
*/

const assert = require('assert')
const solution = require('./solution')

const testinput =
`
#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
`

describe('solution', () => {
  it('should return the checksum of the input strings', () => {
    assert.equal(solution(testinput), 4)
  })
})


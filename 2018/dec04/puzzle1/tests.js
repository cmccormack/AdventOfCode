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
[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up
`

describe('solution', () => {
  it('should return the product of the guard number and intersection of sleep minutes', () => {
    assert.equal(solution(testinput), 240)
  })
})


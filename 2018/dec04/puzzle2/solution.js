/*
[1518-09-26 00:02] Guard #1901 begins shift
[1518-08-24 00:24] falls asleep
[1518-07-16 00:26] falls asleep
[1518-08-19 00:19] falls asleep
[1518-10-20 00:34] wakes up
*/

const fs = require('fs')

// Trim and split text into an Array of strings
const stringCleaning = str => str.trim().split(/\r?\n+/)

const roundMinutes = date => {
  date.setDate(date.getDate() + Math.round(date.getMinutes()/60))
  date.setMinutes(0)

  return date
}

module.exports = (str, start=0) => {

  const guards = {}
  const entries = stringCleaning(str)
  
  .map(entry => {
    const month = +entry.slice(6,8) - 1
    const day = entry.slice(9,11)
    const min = entry.slice(15,17)
    const date = new Date(1970, month, day, 0, min, 0)
    const action = entry.slice(19)
    const originalDate = entry.slice(1, 17)

    return ({
      date: action.includes('Guard') ? roundMinutes(new Date(date)) : date,
      action,
      originalDate,
    })
  })
  .sort((a,b) => (
    a.date.getTime() - b.date.getTime()
  ))

  let guard
  let sleepStart
  for (entry of entries) {

    const {date, action, originalDate} = entry
    
    if (action.includes('Guard')) {
      guardId = action.match(/#\d+\s+/g)[0].slice(1)
      shiftDate = `${date.getMonth()+1}-${('0' + (date.getDate())).slice(-2)}`
      if (!guards[guardId]) {
        guards[guardId] = {}
      }
      guard = guards[guardId]
      guard[shiftDate] = []
      continue
    }

    if (action === 'falls asleep') {
      sleepStart = date.getMinutes()
    }

    if (action === 'wakes up') {
      const sleepEnd = date.getMinutes()
      for (let i = sleepStart; i < sleepEnd; i+=1) {
        guard[shiftDate].push(i)
      }
    }
  }

  const result = Object.keys(guards).map(guardId => {
    const bin = {}

    for (set of Object.values(guards[guardId])) {
      for (let min of set) {
        if (!bin[min]) {
          bin[min] = 0
        }
        bin[min] += 1
      }
    }

    const [min=null, times=0] = Object.entries(bin).sort((a,b) => b[1] - a[1])[0] || []

    return {guardId, min, times}
  })
  .reduce((a,v) => a.times > v.times ? a : v)

  return +result.min * +result.guardId
}

const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
  let currentLetter = ''
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (currentLetter !== str[i]) {
      if (counter !== 0)
        result += counter === 1 ? currentLetter : counter + currentLetter
      prevLetter = currentLetter
      currentLetter = str[i]
      counter = 1
    } else {
      counter++
    }
  }
  if (counter !== 0)
    result += counter === 1 ? currentLetter : counter + currentLetter
  return result
}

module.exports = {
  encodeLine,
}

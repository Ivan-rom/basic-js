const { NotImplementedError } = require('../extensions/index.js')

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true
  const groups = n.split('-')
  groups.forEach((group) => {
    group.split('').forEach((char) => {
      if (
        !(char.charCodeAt() >= 48 && char.charCodeAt() <= 57) &&
        !(
          char.toUpperCase().charCodeAt() >= 65 &&
          char.toUpperCase().charCodeAt() <= 70
        )
      )
        result = false
    })
  })
  return result
}
module.exports = {
  isMAC48Address,
}

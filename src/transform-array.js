const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let result = [...arr]
  for (let i = 0; i < result.length; i++) {
    let index = i
    let element = result[i]

    if (typeof element === 'string') {
      if (element.includes('next')) {
        index = i + 1
      } else if (element.includes('prev')) {
        index = i - 1
      }

      if (element.includes('double')) {
        if (result[index]) result.splice(i, 1, result[index])
        else result.splice(i, 1)
      } else if (element.includes('discard')) {
        if (element.includes('next')) {
          if (
            result[index + 1] === '--double-prev' ||
            result[index + 1] === '--discard-prev'
          ) {
            result.splice(index + 1, 1)
          }
        } else if (element.includes('prev')) {
          if (
            result[index - 1] === '--double-next' ||
            result[index + 1] === '--discard-next'
          ) {
            result.splice(index - 1, 1)
          }
        }
        if (result[index]) {
          result.splice(index, 1)
          i--
        }
        result.splice(result.indexOf(element), 1)
        i--
      }
    }
  }
  return result
}

module.exports = {
  transform,
}

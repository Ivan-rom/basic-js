const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const add = new Array(options.additionRepeatTimes)
    .fill(typeof options.addition !== 'undefined' ? `${options.addition}` : '')
    .join(options.additionSeparator || '|')
  const result = new Array(options.repeatTimes)
    .fill(`${str}${add}`)
    .join(options.separator || '+')
  return result
}

module.exports = {
  repeater,
}

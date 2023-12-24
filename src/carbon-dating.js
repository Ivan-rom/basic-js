const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let isNotIterable = false
  if (typeof sampleActivity !== 'string') isNotIterable = true
  if (Number.isNaN(+sampleActivity)) isNotIterable = true
  if (+sampleActivity === 0) isNotIterable = true
  if (+sampleActivity < 0) isNotIterable = true

  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD)
  )

  if (age < 0) isNotIterable = true
  if (isNotIterable) {
    return !isNotIterable
  }
  return age
}

module.exports = {
  dateSample,
}

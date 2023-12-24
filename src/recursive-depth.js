const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.deeps = []
  }

  calculateDepth(arr, deep = 1) {
    if (Array.isArray(arr)) {
      this.deeps.push(deep)
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (Array.isArray(element)) {
          this.calculateDepth(element, deep + 1)
        }
      }
    }
    if (deep === 1) {
      const result = Math.max(...this.deeps)
      this.deeps = []
      return result
    }
  }
}

module.exports = {
  DepthCalculator,
}

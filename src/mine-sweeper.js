const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < matrix.length; i++) {
    const list = matrix[i]
    for (let j = 0; j < list.length; j++) {
      const element = list[j]
      result[i][j] = 0
      if (element) result[i][j]++
      else {
        if (list[j - 1]) result[i][j]++
        if (list[j + 1]) result[i][j]++
        if (!(i <= 0)) {
          const arr = matrix[i - 1]
          if (arr[j - 1]) result[i][j]++
          if (arr[j]) result[i][j]++
          if (arr[j + 1]) result[i][j]++
        }
        if (!(i + 1 === matrix.length)) {
          const arr = matrix[i + 1]
          if (arr[j - 1]) result[i][j]++
          if (arr[j]) result[i][j]++
          if (arr[j + 1]) result[i][j]++
        }
      }
    }
  }
  return result
}

module.exports = {
  minesweeper,
}

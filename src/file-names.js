const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const set = new Set()
  for (let i = 0; i < names.length; i++) {
    let element = names[i]
    if (set.has(element)) {
      element = renameFile(element, set)
    }
    set.add(element)
    names[i] = element
  }
  return names
}

function renameFile(name, set, iteration = 1) {
  const changedName = `${name}(${iteration})`
  if (set.has(changedName)) {
    return renameFile(name, set, iteration + 1)
  }
  return changedName
}

module.exports = {
  renameFiles,
}

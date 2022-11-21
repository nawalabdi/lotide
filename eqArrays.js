const assertEqual = require('./assertEqual');


const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let c = 0; c < arr1.length; c++) {
    if (arr1[c] !== arr2[c]) return false
  }

  return true
}


module.exports = eqArrays
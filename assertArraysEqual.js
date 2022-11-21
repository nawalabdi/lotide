const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let b = 0; b < arr1.length; b++) {
    if (arr1[b] !== arr2[b]) return false
  }

  return true
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
      ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}



assertArraysEqual([4,5,6], [6,7,9])
assertArraysEqual([6,7,9], [6,7,9])

// console.log(assertEqual(([1, 2, 3], [1, 2, 3])), true) // => true
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1])), false) // => false
// console.log(assertEqual(eqArrays([1, 4, 3], [1, 2, 3])), true); // => should fail
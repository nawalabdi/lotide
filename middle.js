// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return []
  };
  if (array.length%2!==0) { // if the lenght of the array is odd
    const middle1 = Math.floor(array.length/2) // then we find the middle index
    return [array[middle1]] // returns the element at the middle index
  } else {
    const middle1 = Math.floor(array.length/2)
    const middle0 = Math.floor(array.length/2-1)
    return [array[middle0],array[middle1]]
  }
 
}

//Test cases for arrays with one or two elements
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

//Test cases for arrays with odd number of elements 
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

//Test cases for arrays with an even number of elements
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
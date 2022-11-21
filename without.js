//eqArrays
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
//assertArraysEqual
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
      ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function (source, itemsToRemove) {
  let result = []
  for(let value of source) {
    if (!itemsToRemove.includes(value)) {
      result.push(value)
    } 
  }
  console.log(result)
  return result
}


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
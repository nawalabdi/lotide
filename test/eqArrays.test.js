const assertEqual= require('../assertEqual');
const eqArrays = require('../eqArrays');





// tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should return true
assertEqual(eqArrays([6, 7, 8], [3, 2, 1]), false) // => Should return false
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), true); // => should fail
assertEqual(eqArrays([5, 1, 3], [8, 9, 0]), true); // => should fail
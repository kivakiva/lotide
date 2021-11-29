const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//test
console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[1,2,4]));
console.log(assertArraysEqual([1,2,3],[1,2,3,4]));
console.log(assertArraysEqual([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(assertArraysEqual([[2, 3], [4]], [[2, 3], 4])); // => false

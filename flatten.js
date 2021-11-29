
const eqArrays = (arr1, arr2) => {
  let longLength = Math.max(arr1.length, arr2.length);
  let test = true;
  for (let i = 0; i < longLength; i++) {
    if (arr1[i] !== arr2[i]) {
      test = false;
    }
  }
  return test;
};



const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`◙◙◙Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//test
// console.log(assertArraysEqual([1,2,3],[1,2,3]));
// console.log(assertArraysEqual([1,2,3],[1,2,4]));
// console.log(assertArraysEqual([1,2,3],[1,2,3,4]));


let flatten = (arr) => {
  let arrNew = [];
  arr
    .map((a) => {
      if (Array.isArray(a)) {
        return a.map(a => arrNew = arrNew.concat(a));
      } else {
        arrNew = arrNew.concat(a);
      }
    });
  return arrNew;
};

module.exports = flatten;

// console.log(flatten([0,1,2,[3,4],5,6]));
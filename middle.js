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

const middle = (arr) => {
  if (arr.length < 3) {return []}
  else if (arr.length % 2 !== 0) {return [arr[arr.length/2-0.5]]}
 else if (arr.length % 2 === 0) {return [arr[arr.length/2-1],  arr[arr.length/2]]}
}

module.exports = middle;


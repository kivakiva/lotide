const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

//test
console.log(eqArrays([1,2,3],[1,2,3]));
console.log(eqArrays([1,2,3],[1,2,4]));
console.log(eqArrays([1,2,3],[1,2,3,4]));

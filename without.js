
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
console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[1,2,4]));
console.log(assertArraysEqual([1,2,3],[1,2,3,4]));

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};

const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    let pass = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        pass = false;
      }
    }
    if (pass) {
      newArr = newArr.concat(source[i]);
    }
  }
  return newArr;
};

//test
// console.log(assertArraysEqual(without([1,2,3,4], [4]),[1,2,3]));
// console.log(assertArraysEqual(without([1,2,3,4], [1]),[1,2,3]));
// console.log(assertArraysEqual(without([1,2,3,4,5,6], [4,6,5]),[1,2,3]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


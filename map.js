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

const words = ["ground", "control", "to", "major", "tom"];
const test2 = [1,2,3,4,5,6]


const map = (array, func) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(func(array[i]))
  }
  return newArr
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], map(words, word => word[0]));
// assertArraysEqual([4,5,6,7,8,9], map(test2, num => num + 3));
// assertArraysEqual([0,0,0,0,0,0], map(test2, num => 0));

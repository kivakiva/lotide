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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`◙◙◙Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

assertObjectsEqual([0,1,2,3,4], [0,1,2,3,4])
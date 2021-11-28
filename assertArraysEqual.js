
const eqArrays = (arr1, arr2) => {
  let longLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < longLength; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      const current1 = arr1[i]
      const current2 = arr2[i]
      const remainder1 = arr1.slice(i +1);
      const remainder2 = arr2.slice(i +1)
      if (!eqArrays(current1, current2)) {
        return false;
      } else if (Array.isArray(remainder1) && Array.isArray(remainder2)) {
          return eqArrays(remainder1, remainder2)
      } else {
        console.log(remainder2)
        return remainder1 === remainder2}
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`◙◙◙Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//test
console.log(eqArrays([1,2,3],[1,2,3]));
console.log(eqArrays([1,2,3],[1,2,4]));
console.log(eqArrays([1,2,3],[1,2,3,4]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false



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

module.exports = without;

//test
// console.log(assertArraysEqual(without([1,2,3,4], [4]),[1,2,3]));
// console.log(assertArraysEqual(without([1,2,3,4], [1]),[1,2,3]));
// console.log(assertArraysEqual(without([1,2,3,4,5,6], [4,6,5]),[1,2,3]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


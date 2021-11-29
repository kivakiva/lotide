const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters= (str) => {
  let newObj = {};
  for (ele of str) {
    if (ele !== " ") {
      if (newObj[ele]) {newObj[ele] += 1}
      else {newObj[ele] = 1}
    }
  }
  return newObj;
}

module.exports = assertEqual;
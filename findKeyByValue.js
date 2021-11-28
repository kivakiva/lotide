const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKeyByValue = (obj, valueToMatch) => {
  for (let element of array) {
    if (obj[key] === valueToMatch) {
      return key;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);





const testFunction = (array) => {
  for (let ele of array) {
    console.log(ele)
  }
}

const testArray = ["test", "hope", "colour", "three"]

console.log(testFunction(testArray))
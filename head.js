const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = (array) => {

if (Array.isArray(array) && array.length > 0) {

return array[0]

} else {return undefined}

};


assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

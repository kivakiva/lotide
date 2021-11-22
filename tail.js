const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`◙◙◙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`▲▲▲Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = (array) => {

  if (Array.isArray(array)) {
  
    return array.slice(1);
  
  } else {
    return undefined;
  }
  
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const result2 = tail(["single"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result2, [ ]); // array with 1
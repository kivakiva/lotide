const tail = require('../tail');
const assertEqual = require ('../assertEqual');

const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});


const result = tail(["Hello", "Lighthouse", "Labs"]);
const result2 = tail(["single"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result2, [ ]); // array with 1
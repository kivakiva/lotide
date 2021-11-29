const middle = require('../middle');

const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [4, 5] for [1,2,3,4,5,6,7,8]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });
  it("returns [4] for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]),[4]); 
  });
  it('returns [] for [1,2]', function () {
    assert.deepEqual(middle([1,2]), [])
  });
});

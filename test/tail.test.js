const assert = require('chai').assert;
const tail = require('../tail');



//test code 
describe("#tail", () => {
  it("returns lighthouse labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"]

    assert.equal(result.length, 2);
    // assert.equal(result[0], "Lighthouse");
    // assert.equal(result[1], "Labs");
    assert.deepEqual(result, expected);





  });
})

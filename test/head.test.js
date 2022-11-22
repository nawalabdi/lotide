const assert = require('chai').assert;
const {head } = require("../index");


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});



// // test code before refactor 
// assertEqual(head([5,9,12]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5,]), 5);
// assertEqual(head([]), undefined);
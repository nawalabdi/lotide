const assertEqual= require('../assertEqual');
const head = require('../head');




// test code
assertEqual(head([5,9,12]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,]), 5);
assertEqual(head([]), undefined);


const assertEqual= require('../assertEqual');
const tail = require('../tail');




//test code 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const oneElement = [2];
assertEqual(tail(oneElement).length, 0);

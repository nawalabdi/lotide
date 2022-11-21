
// Function that takes in an array and return middle element :)

const middle = function(array) {
  let mid = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return mid;
  } else {
    const start = 0;
    const end = array.length - 1;
    const midIndex = Math.floor((start + end) / 2);
    if (arr.length % 2 === 0) {
      mid.push(array[midIndex]);
      mid.push(array[midIndex + 1]);
    } else {
      mid.push(array[midIndex]);
    }
  }
  return mid;
};

 module.exports = middle;
1. Using Array.prototype.flat() (modern, built-in)
const arr = [1, [2, [3, [4, [5]]]], 6];
const flatArr = arr.flat(Infinity);  // Infinity flattens any depth

console.log(flatArr); // [1, 2, 3, 4, 5, 6]

2.
function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []
  );
}

const arr = [1, [2, [3, [4, [5]]]], 6];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]

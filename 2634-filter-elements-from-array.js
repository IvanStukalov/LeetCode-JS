// Given an integer array 'arr' and a filtering function 'fn', return a filtered array 'filteredArr'.
//
// The 'fn' function takes one or two arguments:
//
//  arr[i] - number from the arr
//  i - index of arr[i]
//
// filteredArr should only contain the elements from the arr for which the expression
//  fn(arr[i], i)
// evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const res = [];
  arr.forEach((v, i) => {
    if (fn(v, i)) {
      res.push(v);
    }
  })
  return res;
};

const arr = [0,10,20,30];
const fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn))

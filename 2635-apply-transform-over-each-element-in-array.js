// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.
//
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let res = [];
  arr.forEach((v, i) => {
    res.push(fn(v, i));
  })
  return res
};

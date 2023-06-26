// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  let isPositive = x > 0;
  if (!isPositive) {
    x *= -1;
  }
  for (; x !== 0;) {
    res = (10 * res) + (x % 10);
    x = Math.floor(x / 10);
  }
  if (!isPositive) {
    res *= -1;
  }
  if (isPositive && res < 2147483647) {
    return res;
  }
  if (!isPositive && res > -2147483648) {
    return res;
  }
  return 0;
};


console.log(reverse(123))

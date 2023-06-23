// Given a function fn and a time in milliseconds t, return a debounced version of that function.
//
// A debounced function is a function whose execution is delayed by t milliseconds and whose execution
//  is cancelled if it is called again within that window of time.
//  The debounced function should also recieve the passed parameters.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, t)
  }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

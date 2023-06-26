// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (let i in s) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      switch (s[i]) {
        case ')':
          if (stack.pop() !== '(') {
            return false;
          }
          break;
        case ']':
          if (stack.pop() !== '[') {
            return false;
          }
          break;
        case '}':
          if (stack.pop() !== '{') {
            return false;
          }
          break;
      }
    }
  }
  return stack.length === 0;
};

let s = "()";
console.log(s, isValid(s))

s = "()[]{}";
console.log(s, isValid(s))

s = "(]";
console.log(s, isValid(s))

s = "[([]])";
console.log(s, isValid(s))

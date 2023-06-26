// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let currentLen = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
      currentLen++;
    } else {
      if (currentLen > max) {
        max = currentLen;
      }
      currentLen = 0;
      i = map.get(s[i]);
      map.clear();
    }
  }
  if (currentLen > max) {
    max = currentLen;
  }
  return max;
};

let str = "abcabcbb";
console.log(str, lengthOfLongestSubstring(str))

str = "bbbbb";
console.log(str, lengthOfLongestSubstring(str))

str = "pwwkew";
console.log(str, lengthOfLongestSubstring(str))

str = " ";
console.log(str, lengthOfLongestSubstring(str))

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sMap = new Map();
  for (let sym of s) {
    if (sMap.has(sym)) {
      sMap.set(sym, sMap.get(sym) + 1);
    } else {
      sMap.set(sym, 1);
    }
  }

  let tMap = new Map();
  for (let sym of t) {
    if (tMap.has(sym)) {
      tMap.set(sym, tMap.get(sym) + 1);
    } else {
      tMap.set(sym, 1);
    }
  }

  for (let pair of sMap) {
    if (tMap.get(pair[0]) !== pair[1]) {
      return false;
    }
  }
  for (let pair of tMap) {
    if (sMap.get(pair[0]) !== pair[1]) {
      return false;
    }
  }
  return true
};

let s = "rat";
let t = "car";

console.log(isAnagram(s, t))

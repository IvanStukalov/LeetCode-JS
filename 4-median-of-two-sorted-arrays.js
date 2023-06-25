// Given two sorted arrays nums1 and nums2 of size m and n respectively,
//  return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let res = []
  let i = 0;
  let j = 0;
  for (; i < nums1.length && j < nums2.length;) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++
    }
  }
  if (i !== nums1.length) {
    res.push(...nums1.slice(i, nums1[nums1.length]));
  }
  if (j !== nums2.length) {
    res.push(...nums2.slice(j, nums2[nums2.length]));
  }

  console.log(res)
  if (res.length % 2 === 1) {
    return res[(res.length - 1) / 2];
  } else {
    return (res[res.length / 2] + res[res.length / 2 - 1]) / 2
  }
};

nums1 = [3]
nums2 = [-2,-1]
console.log(findMedianSortedArrays(nums1, nums2));

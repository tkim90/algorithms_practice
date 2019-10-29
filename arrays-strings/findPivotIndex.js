// https://leetcode.com/problems/find-pivot-index/

/**
 * L = [1, 8, 11, 14, 19, 25]
 * R = [28,27,20, 17, 11, 6]
 */
var pivotIndex = function(nums) {
  let left = [nums[0]];
  let right = [];
  right[nums.length - 1] = nums[nums.length - 1];
  
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] + nums[i];
  }
  
  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] + nums[j];
  }
  
  for (let k = 0; k < nums.length; k++) {
    if (k === 0 && right[k + 1] === 0) {
      return k;
    } else if (k === nums.length - 1 && left[k - 1] === 0) {
      return k;
    } else if (left[k - 1] === right[k + 1]) {
      return k;
    }
  }
  return -1;
};

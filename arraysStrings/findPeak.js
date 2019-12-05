// https://leetcode.com/problems/find-peak-element/submissions/

// O(n) time
var findPeakElement = function(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] > nums[i + 1]) {
      return i;
    } else if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
      return i;
    } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return -1;
};


// O(logn) time - binary search

var findPeakElement2 = function(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let pivot = Math.floor((right + left) / 2);

    if (pivot === 0 && nums[pivot] > nums[pivot + 1]) {
      return pivot;
    } else if (pivot === nums.length - 1 && nums[pivot] > nums[pivot - 1]) {
      return pivot;
    } else if (nums[pivot] > nums[pivot - 1] && nums[pivot] > nums[pivot + 1]) {
      return pivot;
    }
    
    if (nums[pivot] < nums[pivot + 1]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return right;
};

console.log(findPeakElement2([1,2]));

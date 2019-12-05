// https://leetcode.com/problems/missing-number/submissions/
// Gauss formula
var missingNumber = function(nums) {
  const n = nums.length;
  let expectedSum = ((n)*(n + 1)) / 2;
  let actualSum = nums.reduce((total, val) => total += val, 0);
  
  return expectedSum - actualSum;
};

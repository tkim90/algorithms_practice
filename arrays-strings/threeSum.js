// https://leetcode.com/problems/3sum/
var threeSum = nums => {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let triplets = [];
  
  let target = 0;
  for (let i = 0; i < nums.length - 2; i ++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    let partialTarget = target - nums[i];
    
    while (j < k) {
      let partialSum = nums[j] + nums[k];
      if (partialSum === partialTarget) {
        triplets.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (partialSum < partialTarget) {
        j++;
      } else if (partialSum > partialTarget) {
        k--;
      }     
    }
  }
  return triplets;
};

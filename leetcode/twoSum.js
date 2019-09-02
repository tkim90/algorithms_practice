/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // input: array of integers
  // output: indices of two numbers that add to target
  // edge cases:
    // no input
    // no indices that match target
    // negative integers
    // duplicate values
    
  // loop thru array
    // get complement number thru complement = target - num[i]
    // if complement in hash, return
    // if not seen, add to hash

  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (hash[complement] && hash[complement] !== undefined) {
      return [Number(hash[complement]), i];
    }
    hash[nums[i]] = i; 
  }
  return null;
};

console.log(twoSum([1,3,4,2], 6)) // [2,3]
console.log(twoSum([3,3], 6)) // [0,1]
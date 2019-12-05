// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
  let output = [];
  
  function generateSubsets(index, current, options, output) {
    output.push(current.slice());
    
    for (let i = index; i < options.length; i++) {
      current.push(options[i]);
      generateSubsets(index + 1, current, options, output);
      current.pop();
    }
  }
  generateSubsets(0, [], nums, output);
  return output;
};
// https://leetcode.com/problems/top-k-frequent-elements/

// create list of objects. Key is element, Val is frequency
// sort this list
// print array with up to k elements from this sorted list

var topKFrequent = function(nums, k) {
  let freqHash = new Map();
  let result = [];
  
  nums.forEach(n => freqHash.set(n, freqHash.get(n) + 1 || 1));
  
  let sortedFreq = [...freqHash.entries()].sort((a, b) => b[1] - a[1]);
  
  for (let j = 0; j < k; j++) {
    result.push(sortedFreq[j][0]);
  }
  
  return result;
};

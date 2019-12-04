// https://leetcode.com/problems/valid-anagram/


// O(nlogn) time, O(n) space
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let s1 = s.split('').sort().join('');
  let s2 = t.split('').sort().join('');
  
  return s1 === s2;
};

// O(n) time, O(1) space
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  let counter = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!counter[s.charAt(i)]) counter[s.charAt(i)] = 1;
    else counter[s.charAt(i)]++;
    
    if (!counter[t.charAt(i)]) counter[t.charAt(i)] = -1;
    else counter[t.charAt(i)]--;
  }
  
  for (let charCount in counter) {
    if (counter[charCount] !== 0) return false;
  }
  
  return true;
};
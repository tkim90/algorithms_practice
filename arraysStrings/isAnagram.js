// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let s1 = s.split('').sort().join('');
  let s2 = t.split('').sort().join('');
  
  return s1 === s2;
};

var isPalindrome = function(s) {
  if (s.length === 0) return true;
  let strArr = s.split('').map(char => char.toLowerCase()).join('');
  strArr = strArr.match(/[0-9a-z]/g);
  if (strArr === null) return true;
  
  while (strArr.length > 1) {
    const left = strArr[0];
    const right = strArr[strArr.length - 1];
    
    if (left === right) {
      strArr.shift();
      strArr.pop();
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome(" ")); // true
console.log(isPalindrome(", , ")); // true
console.log(isPalindrome("0P")); // false


// more optimal solution from leetcode discussions:
// - use regex + replace to transform string in place
// - check if palindrome by comparing transformed string and reversed string

var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  return s.split('').reverse().join('') == s
};
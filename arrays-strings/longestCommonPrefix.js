// https://leetcode.com/problems/longest-common-prefix/

/*
no common prefix > ''


must be common across all elements

by hand:
- visit each char from left for all strings in arr simultaneously
- each time there's a match, add to a result string
- as soon as there is a mismatch, exit and return the result

pseudocode:
- visit each char in all elements
-   compare current char to next element
-   if match and i'm at last element, add to result
-   if no match, exit
- return result

*/

/// [flower, flow] -> fl
//.          ^
// currChar = 'f'
// ''

const longestCommonPrefix = arr => {
  let result = '';
  if (arr.length === 0) return result;
  if (arr.length === 1) return arr[0];
  
  let maxJ = arr.sort((a, b) => a.length - b.length)[0].length;
  let j = 0;
  let currChar = arr[0][0];
  let matchSoFar = true;
  
  while (j <= maxJ) {
    for (let i = 1; i < arr.length; i++) {
      let comparisonChar = arr[i][j];
      if (comparisonChar === undefined) comparisonChar = "";
      
      if (currChar !== comparisonChar) {
        matchSoFar = false;
      }
      
      if (currChar === comparisonChar && i === arr.length - 1 && matchSoFar) {
        result += arr[i][j];
        matchSoFar = true;
      }
    }
    j++;
    currChar = arr[0][j];
  }
  return result;
};

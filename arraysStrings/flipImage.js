// https://leetcode.com/problems/flipping-an-image/submissions/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    let left = 0;
    let right = A[i].length - 1;
    while (left < right) {
      let temp = A[i][left];
      A[i][left++] = A[i][right];
      A[i][right--] = temp;
    }
    
    for (left = 0; left < A[i].length; left++) {
      A[i][left] = A[i][left] === 0 ? 1 : 0;
    }
  }
  return A;
};
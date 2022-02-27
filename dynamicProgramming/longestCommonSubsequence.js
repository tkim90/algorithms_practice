// Examples
// 'ABAZDC', 'BACBAD' => ABAD
// '' , 'ABC' => ''
// '', '' => ''

// Create hash of seen char for s1 and s2
// Check if they've been seen before in other string's hash, i and i-1 positions
// Add to longest common sub seen so far
//    make sure the used characters are set to false

function longestCommonSubsequence(s1, s2) {
  const dp = [];
  let m = s1.length;
  let n = s2.length;

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // two  possible scenarioes:
      // 1. the current char of s1 and s2 does not match
      // 2. the current char of s1 and s2 matches

      if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
        // check left and top for longer subsequence length
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // check diag for prev longest subsequence length and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("ABAZDC", "BACBAD"));

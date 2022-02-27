/*
Dynamic Programming
I know that the Nth and N-1th step is always 1

for example
to get to step 5
AT step 4, there's one way to get to 5
AT step 5, there's one way to get to 5

*/

function climbStairs (n) {
  let dp = new Array(n)
  dp[n] = 1
  dp[n - 1] = 1
  console.log(dp)

  for (let i = n; i >= 0; i--) {
    dp[i] = dp[i+1] + dp[i+2]
  }
  return <dp 0=""></dp>
}

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
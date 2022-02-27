/*
Dynamic Programming approach:
Knowing that F(0) = 0, F(1) = 1, F(2) = 1,
you can count to N and cache the answer as you build up to the final solution
*/

function fib_dp (n) {
  let dp = new Array(n+1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2

  for (let i = 2; i < n - 1; i++) {
    // Cache the solution at step i
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
}

console.log(`It should be 0: ${fib_dp(0)}`);
console.log(`It should be 1: ${fib_dp(1)}`);
console.log(`It should be 3: ${fib_dp(4)}`);
console.log(`It should be 5: ${fib_dp(5)}`);
console.log(`It should be 13: ${fib_dp(7)}`);

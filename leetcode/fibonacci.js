// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.

// Given N, calculate F(N).
// N = 3
// F(3) = F(2) + F(1)

// base case: if N is 0, return 0
// base case: if N is 1, return 1
// recursive: return N-1 + N-2

const fib = ((n) => {
  let memo = {};

  function memoize(n) {
    if (n in memo) {
      console.log(`Memoizing...${memo[n]}`)
      return memo[n];
    }

    if (n === 0 || n === 1) return n;
    let result = fib(n - 1) + fib(n - 2);

    memo[n] = result;
    return result;
  }

  return memoize;
})();

// fib(0) = 0
// fib(1) = 1
// fib(2) = fib(0) + fib(1) = 0 + 1
// fib(3) = fib(1) + fib(2) = 1 + 1 = 2

// 0, 1, 1, 2, 3, 5, 8, 13

console.log(`It should be 0: ${fib(0)}`);
console.log(`It should be 1: ${fib(1)}`);
console.log(`It should be 3: ${fib(4)}`);
console.log(`It should be 5: ${fib(5)}`);
console.log(`It should be 13: ${fib(7)}`);
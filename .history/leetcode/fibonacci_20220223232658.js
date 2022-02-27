/*
Dynamic Programming approach:
Knowing that F(0) = 0, F(1) = 1, F(2) = 1,
you can count to N and cache the answer as you build up to the final solution
*/


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

// Use an anonymous function that calls "memoize", which 
// creates a closure for the 'memo'ized results from past recursive calls


const fib = ((n) => {
  let memo = {};

  function memoIt(n) {
    if (n in memo) {
      console.log(`Memoizing...${memo[n]}`)
      return memo[n];
    }

    if (n === 0 || n === 1) return n;
    let result = fib(n - 1) + fib(n - 2);

    memo[n] = result;
    return result;
  }

  return memoIt;
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
console.log('---------')

// a better way is to create a generic 'memoize' function that
// memoizes any function given

// const fib2 = (n) => {
//   if (n === 0 || n === 1) return n;
//   return fib2(n - 1) + fib2(n - 2);
// }

// const memoize = (func) => {
//   let memo = {};
//   let slice = Array.prototype.slice;

//   return () => {
//     const args = slice.call(arguments);
//     console.log(`Arguments: ${JSON.stringify(args)}`)

//     if (args in memo) {
//       console.log('Memoizing...')
//       return memo[args];
//     } else {
//       return (memo[args] = func.apply(this, args));
//     }
//   }
// };

// console.log(`It should be 0: ${memoize(fib2)(0)}`);
// console.log(`It should be 1: ${fib(1)}`);
// console.log(`It should be 3: ${fib(4)}`);
// console.log(`It should be 5: ${fib(5)}`);
// console.log(`It should be 13: ${fib(7)}`);
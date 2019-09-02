// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.

// Given N, calculate F(N).
// N = 3
// F(3) = F(2) + F(1)

// input: integer n
// output: array of first n fibonacci numbers

// base case: if N is 0, return 0
// base case: if N is 1, return 1
// recursive: return N-1 + N-2

var fib = function(N) {
  if (N === 0) {
    return 0;
  } else if (N === 1) {
    return 1;
  } else {
    return fib(N - 2) + fib(N - 1);
  }
};

// fib(0) = 0
// fib(1) = 1
// fib(2) = fib(0) + fib(1) = 0 + 1
// fib(3) = fib(1) + fib(2) = 1 + 1 = 2
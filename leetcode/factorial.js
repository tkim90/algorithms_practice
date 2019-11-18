// 4! = 4 x 3 x 2 x 1 = 24
// base: n = 1 => return 1
// recursive: n * recurse(n - 1);

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));

const memoize = (func) => {
  let memo = {};

  return () => {
    const args = Array.prototype.slice.call(arguments);

    if (args in memo) {
      return memo[args];
    } else {
      memo[args] = func.apply(this, args);
      return memo[args];
    }
  }
};


/// REFERENCE
_.memoize = function(func) {
  var obj = {};

  // create a closure, where each time the anonymous function is returned, 
  // it stores the obj variable in the execution context.
  return function () {
    var args = [].slice.call(arguments,0);
    var argString = args.join('-');

    if (argString in obj) { 
      return obj[argString];
    }
    obj[argString] = func.apply(this,arguments);
    return obj[argString];
  };
};
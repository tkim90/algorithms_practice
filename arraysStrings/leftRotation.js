// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// I: arr of integers, int d
// O: arr shifted to the left d times

// [1,2,3,4,5], 3, length = 5
// 0: a[3]
// 1: a[4]
// 2: a[0]
// 3: a[1]
// 4: a[2]

// [1,2,3,4,5], 2, length = 5
// [3,4,5,1,2]

// 0: 3
// 1: 

// if i - d is negative, do a.length - i - d

const rotLeft = (a, d) => {
  if (a.length < 2) return a;
  
  const aCopy = a.slice();

  for (let i = 0; i < a.length; i++) {
    // console.log(`pos ${i} goes to pos ${(i + d) % a.length}`)
    aCopy[i] = a[(i + d) % a.length];
  }

  return aCopy;
};


console.log(rotLeft([], 2));
console.log(rotLeft([1], 2));
console.log(rotLeft([1,2,3,4,5], 1));
console.log(rotLeft([1,2,3,4,5], 2));
console.log(rotLeft([1,2,3,4,5], 3));
console.log(rotLeft([1,2,3,4,5], 5));
console.log(rotLeft([1,2,3,4,5], 10));
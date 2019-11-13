

const maxSubarray = (a) => {
  if (a.length === 0) return 0;
  if (a.length === 1) return a[0];

  let maxSoFar = a[0];
  let globalMax = -Infinity;

  for (let i = 1; i < a.length; i++) {
    // console.log(`a[i]: ${a[i]} maxSoFar : ${maxSoFar}, maxSoFar + a[i] ${maxSoFar + a[i]}`)
    maxSoFar = Math.max(a[i], maxSoFar + a[i]);
    globalMax = Math.max(maxSoFar, globalMax);
    // console.log(`global max : ${globalMax}`)
  }

  return globalMax;
};


let r0 = maxSubarray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(`Should return 6: ${r0}`);

let r1 = maxSubarray([1,2,-1,4]);
console.log(`Should return 4: ${r1}`);

let r2 = maxSubarray([]);
console.log(`Should return 0: ${r2}`);

let r3 = maxSubarray([1]);
console.log(`Should return 1: ${r3}`);
// https://leetcode.com/problems/intersection-of-two-arrays/submissions/

const arrayIntersection = (a1, a2) => {
  let results = [];
  let a1Pointer = 0;
  let a2Pointer = 0;

  let length = a1.length < a2.length ? a1.length : a2.length;

  while (a1Pointer < length || a2Pointer < length) {
    if (a1[a1Pointer] === a2[a2Pointer]) {
      results.push(a1[a1Pointer]);
      a1Pointer++;
    } else if (a1[a1Pointer] < a2[a2Pointer]) a1Pointer++;
    else a2Pointer++;
  }

  return results;
};

a = [1, 2, 5, 6, 7, 8];
b = [3, 5, 7, 8, 9];

console.log("====Pointer Solution====");
console.log(
  "Finds intersection",
  arrayIntersection(a, b).toString() === [5, 7, 8].toString()
);

a = [1, 2, 5, 5, 6, 7, 8];
b = [3, 5, 7, 8, 9];
console.log(
  "Doesn't add duplicates",
  arrayIntersection(a, b).toString() === [5, 7, 8].toString()
);

// Solution using hashmaps. O(N) time, O(N) space
//
const arrayIntersectionHashMap = (a1, a2) => {
  if (a1.length === 0 && a2.length === 0) return [];
  let a = new Map();
  let b = new Map();
  let result = [];

  for (let w of a1) {
    a.set(w, true);
  }

  for (let w of a2) {
    b.set(w, true);
  }

  let longerHashmap = a.size > b.size ? a : b;

  a.forEach((key, w) => {
    if (a.has(w) && b.has(w)) {
      result.push(w);
    }
  });

  return result;
};

console.log("====HashMap solution====");
console.log(
  "Finds intersection",
  arrayIntersectionHashMap(a, b).toString() === [5, 7, 8].toString()
);

a = [1, 2, 5, 5, 6, 7, 8];
b = [3, 5, 7, 8, 9];
console.log(
  "Doesn't add duplicates",
  arrayIntersectionHashMap(a, b).toString() === [5, 7, 8].toString()
);

// Bonus: O(nlogn) solution would be if you sorted, then did binary search on the other one.

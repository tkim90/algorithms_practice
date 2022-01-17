/*
 * Given two sorted arrays, A and B, where A has a large enough buffer
 * at the end to hold B, write a method to merge B to A in sorted order.
 *
 * [0 5 7 9 . . .] [1 2 3]
 *        a     m       b
 * [0 5 7 9 . . 9] [1 2 3]
 *      a     m         b
 * Edge Cases:
 * -
 *
 */

function sortedMerge(a, b) {
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  // fill a with b.length elements
  let tmp = new Array(b.length).fill(undefined);
  a = a.concat(tmp);

  let mIdx = a.length - 1;

  while (bIdx >= 0 && mIdx >= 0) {
    if (a[aIdx] > b[bIdx]) {
      a[mIdx] = a[aIdx];
      aIdx--;
    } else {
      a[mIdx] = b[bIdx];
      bIdx--;
    }
    mIdx--;
  }
  return a;
}

let a = [0, 5, 7, 9];
let b = [1, 2, 3];

console.log(
  "Merges two sorted arrays: ",
  sortedMerge(a, b).toString() === [0, 1, 2, 3, 5, 7, 9].toString()
);

b = [];
console.log(
  "Merges when b is empty",
  sortedMerge(a, b).toString() === [0, 5, 7, 9].toString()
);

a = [];
b = [];
console.log(
  "Merges when a+b are empty: ",
  sortedMerge(a, b).toString() === [].toString()
);

a = [0];
b = [1, 2, 3];
console.log(
  "Merges when b is larger than a initially: ",
  sortedMerge(a, b).toString() === [0, 1, 2, 3].toString()
);

a = [0, 2, 4, 7];
b = [1, 2, 3];
console.log(
  "Merges when there are duplicates between a and b: ",
  sortedMerge(a, b).toString() === [0, 1, 2, 2, 3, 4, 7].toString()
);

// Given an array, find the count of a pair number and a single number combination in a row of this array. 
// Target array is a[i - 1], a[i], a[i + 1]

// Input: a = [1, 1, 2, 1, 5, 3, 2, 3]
// Output: 3
// Explain:
// [1, 1, 2] -> two 1 and one 2(O)
// [1, 2, 1] -> two 1 and one 2(O)
// [2, 1, 5] -> one 2, one 1 and one five(X)
// [1, 5, 3] -> (X)
// [5, 3, 2] -> (X)
// [3, 2, 3] -> (O)

// Time: O(n)

// [1, 1, 2, 1, 5, 3, 2, 3]
//  ^  ^

// loop thru array with 2 pointers
// pt1 at idx 0
// pt2 at idx 1
// pt3 at idx 2
// add both to currentArr
// check if a[i] = a[i+1], a[i+1] = a[i+2], a[i] = a[i+2]
//.  Y: increment count
//   N: move all pointers by 1
// continue looping until pt3 is < arr.lengnth

const goodTuples = (a) => {
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;
  let totalCandidates = 0;

  while (p3 < a.length) {
    if (a[p1] === a[p2] || a[p2] === a[p3] || a[p1] === a[p3]) {
      totalCandidates++;
    }
    p1++;
    p2++;
    p3++;
  }
  return totalCandidates;
};

console.log(`Should return 3: ${goodTuples([1, 1, 2, 1, 5, 3, 2, 3])}`);
console.log(`Should return 2: ${goodTuples([1, 1, 1, 2, 5, 4, 2, 3])}`);
console.log(`Should return 2: ${goodTuples([2, 1, 2, 3, 1, 3])}`);
console.log(`Should return 0: ${goodTuples([])}`);
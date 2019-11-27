const arrayIntersection = (a1, a2) => {
  let results = [];
  let a1Pointer = 0;
  let a2Pointer = 0;

  let length = a1.length < a2.length ? a1.length : a2.length;

  while (a1Pointer < length || a2Pointer < length) {
    if (a1[a1Pointer] === a2[a2Pointer]) {
      results.push(a1[a1Pointer]);
      a1Pointer++;
    }
    else if (a1[a1Pointer] < a2[a2Pointer]) a1Pointer++;
    else a2Pointer++;
  }

  return results;
};

console.log(arrayIntersection([1, 2, 5, 6, 7, 8], [3, 5, 7, 8, 9]));
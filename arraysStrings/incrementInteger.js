// I: array
// O: array with 1 digit incremented

// Example:
// [1, 2, 9] => [1, 3, 0]

// reverse arr
// onesPlace = 1;
// scan arr
  // sum = el + onesPlace
  // save tensPlace
  // save onesPlace
  // replace curr el with onesPlace
  // update onesPlace with tensPlace
// reverse arr

const incrementInteger = (a) => {
  a = a.reverse();
  let onesPlace = 1;
  
  for (let i = 0; i < a.length; i++) {
    let sum = a[i] + onesPlace;
    let tensPlace = Math.floor((sum / 10) % 10);
    onesPlace = Math.floor(sum % 10);
    a[i] = onesPlace;
    onesPlace = tensPlace;
    tensPlace = 0;
  }
  a = a.reverse();
  return a;
};

console.log(incrementInteger([1, 2, 9]));
console.log(incrementInteger([1, 3, 0]));
console.log(incrementInteger([9, 9, 9]));
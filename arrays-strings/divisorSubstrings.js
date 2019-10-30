// Give a number n and digit number k find all serial substring is able to divisible n.

// Input: n = 120, k = 2
// Output: 2
// Explain:
// 120 -> 12 and 20
// 120 % 12 == 0 (O)
// 120 % 20 == 0 (O)

// Input: n = 555, k = 1;
// Output: 1
// Explain:
// 555 -> 5, 5 and 5 (Duplicate so only count one 5)
// 555 % 5 == 0 (O)

// Input: n = 2345, k = 2
// Output: 0
// Explain:
// 2345 -> 23, 34, 45
// 2345 % 23 != 0 (X)
// 2345 % 34 != 0 (X)
// 2345 % 45 != 0 (X)

// Time: O(n)

// given k digit limit
// find all contiguous substrings in input integer

// convert n to string
// get all substrings **using helper
// loop through substr array
//.  if int % n is 0, increment count

// getSubstr(n, k)
//.  convert n to string
//.  currSubstr = '';
//.  loop thru each char in str
//     add curr element to currSubStr
///.   is currSubstr length equal to k?
//.      Y: add to result arr
//.         reset curr with curr char
//.      N: keep going


const divisorSubstr = (n, k) => {
  const substrings = getSubstrings(n, k);
  let totalSubstringDivisors = 0;

  for (let num of substrings) {
    if (n % num === 0) {
      totalSubstringDivisors++;
    }
  }
  return totalSubstringDivisors;
};

const getSubstrings = (n, k) => {
  let nStr = n.toString();
  let currSubstr = '';
  let result = [];

  for (let i = 0; i < nStr.length; i++) {
    currSubstr += nStr[i];
    if (currSubstr.length === k) {
      result.push(Number(currSubstr));
      currSubstr = nStr[i];
    }
  }
  return result;
}

console.log(`Should return 2: n = 120, k = 2: ${divisorSubstr(120, 2)}`);
console.log(`Should return 1: n = 555, k = 1: ${divisorSubstr(555, 1)}`);
console.log(`Should return 0: n = 2345, k = 2: ${divisorSubstr(2345, 2)}`);
// constructorNames
// Give two string a and b, count the frequency for each character. 
// The requirement is to find out the same frequency characters which could be replaced to each other.

// Input: a = babczzz, b = abbzccc
// Output: true
// Explain:
// In a string,
// a -> 1, b -> 2, c-> 1, z -> 3
// In b string,
// a -> 1, b -> 2, c -> 3, z -> 1
// a and b are the same frequency.
// c and z have same frequency so they can replace to each other.
// So return true.

// Input: a = x, b = y
// Output: false
// Explain: Not the same character

// Input: a = ii, b = j
// Output: false
// Explain: length is different.


// check if a and b have same lengths
// count freq of each character to map
// find different characters with same frequency
//    create a set for a
//.   loop thru each in set and compare current el with one after it

// base: 1 lengths are differnt -> return false
// base: has at least 1 character that is not in the other
// create set
// create frequency map of each element
// loop array and compare i and i + 1. if their frequencies match, return true

const constructorNames = (a, b) => {
  if (a.length !== b.length) return false;
  let charFrequencyMapA = new Map();
  let charFrequencyMapB = new Map();
  let uniqueChars = new Set([...a]);
  uniqueChars = Array.from(uniqueChars);

  [...a].forEach(char => charFrequencyMapA.set(char, charFrequencyMapA.get(char) + 1 || 1));
  [...b].forEach(char => charFrequencyMapB.set(char, charFrequencyMapB.get(char) + 1 || 1));

  for (let i = 0; i < uniqueChars.length; i++) {
    if (charFrequencyMapA.get(uniqueChars[i]) === charFrequencyMapB.get(uniqueChars[i + 1])) {
      return true;
    }
  }
  return false;
}

let a = 'babczzz';
let b = 'abbzccc';
console.log(constructorNames(a, b));
console.log(constructorNames('x', 'y'));
console.log(constructorNames('ii', 'l'));
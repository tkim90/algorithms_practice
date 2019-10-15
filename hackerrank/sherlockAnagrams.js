// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
// src: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true

// PSEUDOCODE
// find all substrings
// find all annagramatic pairs from substrings
// count pairs
// return number

const getAllSubstrings = (str) => {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
};

// console.log('getAllSubstrings returns substrings for abba: ', getAllSubstrings('abba'));
// console.log('getAllSubstrings returns substrings for mom: ', getAllSubstrings('mom'));

const countAnagrams = (currIdx, arr) => {
  // remove current element from arr
  // loop arr 
  // if el isAnagram of currEl, then it's an anagram
  
  const currEl = arr[currIdx];
  const arrRest = arr.slice(currIdx + 1);
  let count = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (isAnagram(currEl, arrRest[i])) {
      count++;
    }
  }

  return count;
};

const isAnagram = (str1, str2) => {
  // scan str1 into hash w/ val to false
  // scan str2 into hash
    // if hash exists, change to true
  // scan hash
    // if any false, return false 
    // otherwise return true

  let hash = {};
  for (let char of str1) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for (let char of str2) {
    if (hash[char]) {
      hash[char]--;
    } else {
      return false;
    }
  }

  for (let key in hash) {
    if (hash[key] !== 0) {
      return false;
    }
  }

  return true;
};

// console.log('isAnagram returns TRUE for abc and cba: ', isAnagram('abc', 'cba'));
// console.log('isAnagram returns FALSE for abc and aaa: ', isAnagram('abc', 'aaa'));
// console.log('isAnagram returns FALSE for eateeeate and tae: ', isAnagram('eateeeate', 'tae'));
// console.log('isAnagram returns TRUE for tae and tae: ', isAnagram('tae', 'tae'));
// console.log('isAnagram returns TRUE for ate and tae: ', isAnagram('ate', 'tae'));

const sherlockAnagrams = (word) => {
  let count = 0;
  let arr = getAllSubstrings(word);

  for (let i = 0; i < arr.length; i++) {
    count += countAnagrams(i, arr);
  }
  return count;
}

console.log('should return 4: ', sherlockAnagrams('abba')===4);
console.log('should return 0: ', sherlockAnagrams('abcd')===0);
console.log('should return 3: ', sherlockAnagrams('ifailuhkqq')===3);
console.log('should return 0: ', sherlockAnagrams('abcd')===0);
console.log('should return 5: ', sherlockAnagrams('cdcd')===5);
console.log('should return 10: ', sherlockAnagrams('kkkk')===10);

// --- shorter version from the internet ---
function sherlockAnagrams2(s) {
  let count = 0;

  // Size of our sliding window
  for (let i = 1; i < s.length; i++) {
      let found = {};
      
      // Starting index of our sliding window
      for (let j = 0; j + i <= s.length; j++) {
          let substr = s.substr(j, i);
          substr = substr.split('').sort().join('');
          console.log(`str: ${s} : substr(${j},${i}): ${substr}`)
          if (found[substr]) {
              count += found[substr];
              found[substr]++;
          } else {
              found[substr] = 1;
          }
      }
  }
  return count;
}

console.log('should return 4: ', sherlockAnagrams2('abba')===4);
// console.log('should return 0: ', sherlockAnagrams2('abcd')===0);
// console.log('should return 3: ', sherlockAnagrams2('ifailuhkqq')===3);
// console.log('should return 0: ', sherlockAnagrams2('abcd')===0);
// console.log('should return 5: ', sherlockAnagrams2('cdcd')===5);
// console.log('should return 10: ', sherlockAnagrams2('kkkk')===10);
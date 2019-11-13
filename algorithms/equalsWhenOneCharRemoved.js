// Implement a function/method that is given two strings
// and returns whether one can be obtained by the other after removing exactly one character. 
// Specifically, given two strings x and y, 
// return true if and only if (1) x can be obtained by removing one character from y 
// and/or (2) if y can be obtained by removing one character from x.

// Assume that both strings only contain English alphabets and that neither is an empty string.
// Note that x and y can be quite long (each containing millions of characters).
// *Please avoid solutions that would run in O(|x| * |y|) time in worst case

// Examples:
// The following inputs should return False:
// equalsWhenOneCharRemoved("x", "y")
// equalsWhenOneCharRemoved("x", "XX")
// equalsWhenOneCharRemoved("yy", "yx")

// The following inputs should return True:
// equalsWhenOneCharRemoved("abcd", "abxcd")
// equalsWhenOneCharRemoved("xyz", "xz")

// i: two strings
// o: true if one can be obtained from the other after removing exactly one character

// loop thru str1, removing one char at a time and comparing
// loop thru str2, removing one char at a time and comparing

const equalsWhenOneCharRemoved = (str1, str2) => {
  let substrings1 = [str1];
  let substrings2 = [str2];

  substrings1 = [...substrings1, ...buildSubstrings(str1)];
  substrings2 = [...substrings2, ...buildSubstrings(str2)];

  hash = substrings1.reduce((obj, str) => {
    obj[str] = str;
    return obj;
  }, {});

  for (let str2 of substrings2) {
    if (hash[str2]) return true;
  }

  return false;
};

const buildSubstrings = (str) => {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    let left = str.split('').splice(0, i);
    let right = str.split('').splice(i + 1, str.length);
    let currentSubstr = left.join('') + right.join('');
    if (currentSubstr !== '') substrings.push(currentSubstr);
  }

  return substrings;
}



// console.log(`Should be false: ${equalsWhenOneCharRemoved('x','y')}`);
// console.log(`Should be false: ${equalsWhenOneCharRemoved('x','XX')}`);
// console.log(`Should be false: ${equalsWhenOneCharRemoved('x','XX')}`);
console.log(`Should be false: ${equalsWhenOneCharRemoved('yy','yx')}`);
// console.log(`Should be true: ${equalsWhenOneCharRemoved('abcd', 'abxcd')}`);
// console.log(`Should be true: ${equalsWhenOneCharRemoved('xyz','xz')}`);
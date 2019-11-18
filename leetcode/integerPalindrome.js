// if num < 10 => true
// if (mostSignificantDigit = leastSignificantDigit)
  // recurse(num with most and least digits trimmed off)
// copy number to dummy
// mostSignificantDigit
  // factor = 1
  // while dummy > 0
    // dummy = dummy / 10;
    // factor *= 10
  // Math.floor((dummy / factor) % 10)
// leastSignificantDigit = num % 10
// trimmedNum = Math.floor(num - (factor * mostSignificantDigit) / 10)

const integerPalindrome = (num) => {
  if (num < 10) return true;

  let mostSignificantDigit = num;
  let leastSignificantDigit;
  let factor = 1;

  while (mostSignificantDigit > 9) {
    mostSignificantDigit = Math.floor(mostSignificantDigit / 10);
    factor *= 10;
  }
  leastSignificantDigit = num % 10;
  // console.log(`most: ${mostSignificantDigit} least: ${leastSignificantDigit}`)

  if (leastSignificantDigit === mostSignificantDigit) {
    let newNum = Math.floor((num - (mostSignificantDigit * factor)) / 10);
    // console.log(newNum)
    return integerPalindrome(newNum);
  } else {
    return false;
  }
};

// TRUE
console.log('--TRUE--');
console.log(integerPalindrome(1));
console.log(integerPalindrome(101));
console.log(integerPalindrome(11011));
console.log(integerPalindrome(232));
console.log(integerPalindrome(12321));

// FALSE
console.log('--FALSE--');
console.log(integerPalindrome(10));
console.log(integerPalindrome(1234));
console.log(integerPalindrome(10238928734987293));
console.log(integerPalindrome(012));
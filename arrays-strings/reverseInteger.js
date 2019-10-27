const reverse = x => {
  let output = 0;
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x *= -1;
  }
  
  while (x) {
    let digit = x % 10;
    x = Math.floor(x / 10);
    output = output * 10 + digit;
  }
  
  if (output > 2**31) {
    return 0;
  }
  
  return isNegative ? -output : output; 
}

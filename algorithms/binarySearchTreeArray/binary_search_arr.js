// recursive solution

const binarySearchRecursive = function (array, x, left, right) {
  if (left > right) { return false; }

  var mid = (left + right) / 2;
  if (x===array[mid]) {
    return true;
  } else if (x < array[mid]) {
    binarySearchRecursive(array, x, left, mid-1);
  } else {
    binarySearchRecursive(array, x, mid+1, right)
  }
  return false;
};

// test
array = [1,5,7,8,19,33];
x = 7;
console.log(binarySearchRecursive(array, x, 0, array.length-1));
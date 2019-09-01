// assumption: arr is sorted

const binarySearchIterative = (arr, target) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.round((lo + hi) / 2);
    if (arr[mid] < target) {
      lo = mid + 1;
    } else if (arr[mid] > target) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

module.exports.binarySearchIterative = binarySearchIterative;

// time: O(log(N)) because it halves the array of search candidates in each iteration
// space: O(1) because it doesn't create additional memory to search thru the array

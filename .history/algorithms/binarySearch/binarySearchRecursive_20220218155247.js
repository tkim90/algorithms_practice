// assumption: arr is sorted
// [1, 3, 5, 7, 10], 1
const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
  let mid = Math.round((left + right) / 2);

  if (left > right) { return -1; }

  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return mid;
  }

};

module.exports.binarySearchRecursive = binarySearchRecursive;

// time: O(log(N)) because you half your search scope every recursive call
// space: O(log(N)) because you create a stack log(N) times, or every time you narrow down your search by half
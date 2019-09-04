// select pivot element in arr
// start left pointer at first el in array
// start right pointer in last el in array

// left
// compare left el with pivot.
//    if that el < pivot, move left pointer to the right
//    continue until all el in left side element is >= pivot

// right
// compare right el with pivot.
//    if that el > pivot, move right pointer to the left
//    continue until all el in left side element is <= pivot

// check if left pointer is <= right pointer
//    swap left and right elements


const quickSort = (arr, left, right) => {
  left = left || 0;
  right = right || arr.length - 1;

  let idx = partition(arr, left, right);

  if (left < idx - 1) { // if true, more elements remaining to the left of the pivot
    quickSort(arr, left, idx - 1);
  }
  if (idx < right) { // if true, more elements remaining to the right of pivot
    quickSort(arr, idx, right);
  }

  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;

    while (arr[right] > pivot) right--;

    if (left <= right) {
      let oldLeft = arr[left];
      arr[left] = arr[right];
      arr[right] = oldLeft;
      left++;
      right--;
    }
  }

  return left;
};

module.exports.quickSort = quickSort;

// Time: O(N^2) worst, O(NlogN) avg
// Space: O(logN) worst
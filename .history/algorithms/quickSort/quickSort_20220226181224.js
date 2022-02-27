/*

Quicksort

select partition

base case:
  len = 0 -> return []
  len = 1 -> return [element]

  return quicksort(left) + partition + quicksort(right)

*/

function quickSort (arr) {
  if (arr.length === 0) return []
  if (arr.length === 1) return [arr[0]]

  const partition = arr[0] // artibitrarily pick the first one

  const left = arr.filter(v => v < partition)
  const right = arr.filter(v => v > partition)

  return [...quickSort(left), partition, ...quicksort(right)]
}

console.log(quickSort([4,63,2,1,0]))


// const quickSort = (arr, left, right) => {
//   left = left || 0;
//   right = right || arr.length - 1;

//   let idx = partition(arr, left, right);

//   if (left < idx - 1) { // if true, more elements remaining to the left of the pivot
//     quickSort(arr, left, idx - 1);
//   }
//   if (idx < right) { // if true, more elements remaining to the right of pivot
//     quickSort(arr, idx, right);
//   }

//   return arr;
// };

// const partition = (arr, left, right) => {
//   let pivot = arr[Math.floor((left + right) / 2)];

//   while (left <= right) {
//     while (arr[left] < pivot) left++;

//     while (arr[right] > pivot) right--;

//     if (left <= right) {
//       let oldLeft = arr[left];
//       arr[left] = arr[right];
//       arr[right] = oldLeft;
//       left++;
//       right--;
//     }
//   }

//   return left;
// };

module.exports.quickSort = quickSort;

// Time: O(N^2) worst, O(NlogN) avg
// Space: O(logN) worst
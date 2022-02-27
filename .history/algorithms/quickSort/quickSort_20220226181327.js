/*

Quicksort

select partition

base case:
  len = 0 -> return []
  len = 1 -> return [element]

  return quicksort(left) + partition + quicksort(right)

*/

function quickSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];

  const partition = arr[0]; // artibitrarily pick the first one

  const left = arr.filter((v) => v < partition);
  console.log(left);
  const right = arr.filter((v) => v > partition);
  console.log(right);

  return [...quickSort(left), partition, ...quickSort(right)];
}

console.log(quickSort([4, 63, 2, 1, 0]));

module.exports.quickSort = quickSort;

// Time: O(N^2) worst, O(NlogN) avg
// Space: O(logN) worst

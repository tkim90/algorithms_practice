const mergeSort = (array) => {
  if (array.length <= 1) { return array }
  let mid = Math.round((array.length - 1) / 2),
      left = array.slice(0, mid),
      right = array.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

const merge = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push( left.shift() );
    }
    if (right[0] <= left[0]) {
      result.push( right.shift() );
    }
  }

  if (left.length > 0) {
    result = result.concat(left);
  }
  if (right.length > 0) {
    result = result.concat(right);
  }

  return result;
}

module.exports.mergeSort = mergeSort;
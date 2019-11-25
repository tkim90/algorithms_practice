// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

// create empty n x n output matrix
// loop row backwards -> i
  // loop col forwards -> j
    // output[j].push(matrix[i][j])

// assumption: input matrix is always n x n.
const rotate = function(matrix) {
  const n = matrix.length;
  if (n === 0) return [];
  if (n === 1) return [matrix[0]];

  const output = [];
  for (let x = 0; x < n; x++) {
    output.push([]);
  }
  
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      output[j].push(matrix[i][j]);
    }
  }
  return output;
};

// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
// console.log(rotate([
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]));
// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
// console.log(rotate([[1, 2, 3], [4, 5, 6]])); // [[4, 1], [5, 2]]
// console.log(rotate([[1]]));
// console.log(rotate([]));


var rotateInPlace = function(matrix) {
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = tmp;
    }
  }

  return matrix;
};

console.log(rotateInPlace([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 
// console.log(rotateInPlace([[1]]));
// console.log(rotateInPlace([]));
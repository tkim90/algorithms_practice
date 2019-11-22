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

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
console.log(rotate([[1, 2, 3], [4, 5, 6]])); // [[4, 1], [5, 2]]
console.log(rotate([[1]]));
console.log(rotate([]));
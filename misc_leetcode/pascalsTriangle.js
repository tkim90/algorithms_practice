// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  // base case: numRows = 0
  // recursive: push to triangle arr, do work
  var triangle = [];

  var helper = function(currentRow) {
    if (currentRow === numRows + 1) {
      return ;
    }
    var row = [1];
    for (var i = 1; i < currentRow-1; i++) {
      var prevRow = triangle[currentRow-2];
      var stuff = prevRow[i - 1] + prevRow[i];
      row.push(prevRow[i - 1] + prevRow[i]);
    }
    if (currentRow > 1) {
      row.push(1);      
    }
    console.log(currentRow, row)
    triangle.push(row);
    currentRow++;
    helper(currentRow);
  }
  helper(1);
  return triangle;
}

// console.log(generate(1));
// console.log(generate(2));
// console.log(generate(3));
// console.log(generate(4));
console.log(generate(5));
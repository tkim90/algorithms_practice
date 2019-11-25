/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let count = 0;
  function traverseMatrix(grid, i, j) {
    grid[i][j] = '0';
    
    // up
    if (i - 1 >= 0) {
      if (grid[i - 1][j] === '1') {
        traverseMatrix(grid, i - 1, j);
      }
    }
    
    // down
    if (i + 1 < grid.length) {
      if (grid[i + 1][j] === '1') {
        traverseMatrix(grid, i + 1, j);
      }
    }
    
    // left
    if (j - 1 >= 0) {
      if (grid[i][j - 1] === '1') {
        traverseMatrix(grid, i, j - 1);
      }
    }
    
    // right
    if (j + 1 < grid[0].length) {
      if (grid[i][j + 1] === '1') {
        traverseMatrix(grid, i, j + 1);
      }      
    }
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        traverseMatrix(grid, i, j);
      }
    }
  }
  return count;
};
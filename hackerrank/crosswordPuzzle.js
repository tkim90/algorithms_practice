let board = `+-++++++++
+-++++++++
+-------++
+-++++++++
+-++++++++
+------+++
+-+++-++++
+++++-++++
+++++-++++
++++++++++`;
let words = 'AGRA;NORWAY;ENGLAND;GWALIOR';

console.log(board.split('\n'))
console.log(words.split(';'))

const solve = (crossword, words) => {
  let board = crossword.split('\n');
  words = words.split(';');
  let p, q;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      p = i;
      q = j;
      for (let k = 0; k < words.length && p + k < 10; k++) {
        if (board[p + k][q] !== '-' && board[p + k][q] !== words[i][k]) {
          break;
        }
      }
      
      if (k === words[k].length) {
        let temp = board;
        for (k = 0; k < words.length; k++) {
          board[p + k][q] = words[]
        }
      }

    }
  }
}

console.log(solve(board, words));
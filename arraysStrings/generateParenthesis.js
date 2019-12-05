var generateParenthesis = function(n) {
  let results = [];
  
  function helper(current, nbrOpen, nbrClosed) {
    if (current.length === n * 2) {
      results.push(current);
      return ;
    }
    
    let lastChoice = current[current.length - 1];
    if (lastChoice === '(') {
      nbrOpen--;
    } else {
      nbrClosed--;
    }
    
    if (nbrOpen !== 0) {
      helper(current + '(', nbrOpen, nbrClosed);
    }
    if (nbrClosed !== 0 && nbrOpen < nbrClosed) {
      helper(current + ')', nbrOpen, nbrClosed);
    }
  }
  
  helper('(', n, n);
  return results;
};

console.log(generateParenthesis(3));
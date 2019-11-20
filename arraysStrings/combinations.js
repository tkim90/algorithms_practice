var combine = function(n, k) {
  let output = [];
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
    
  if (nums.length === 0 || nums.length === 1) return [nums];
  
  // console.log(nums)
  
  const helper = (current) => {
    if (current.length === k) {
      output.push(current);
      return ;
    }
    for (let i = 0; i < )
  };

  for (let j = 0; j < nums.length; j++) {
    
  }
  
  return output;
};

// console.log(combine(1,1)) // [[1]]
console.log(combine(2,1)) // [[1], [2]]
// console.log(combine(4,2)) // [[1,2]
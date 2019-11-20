var permute = function(nums) {
  let output = [];
  
  const helper = (current, options) => {
    // console.log(current, options)
    if (current.length === nums.length) {
      output.push(current);
      return ;
    }
    
    for (let i = 0; i < options.length; i++) {
      let choice = options[i];
      let newOptions = options.slice(0, i) + (options.slice(i + 1, options.length));
      helper(current + choice, newOptions);
    }
  };
  
  helper([], nums);
  
  return output;
};

// console.log(permute('abc'));
// console.log(permute('abcd'));
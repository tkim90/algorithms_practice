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


// --- ARRAY version

var permute2 = function(nums) {
  let output = [];
  
  const helper = (current, options) => {
    if (current.length === nums.length) {
      output.push(current.slice());
      return ;
    }
    
    for (let i = 0; i < options.length; i++) {
      let choice = options[i];
      let newOptions = options.slice(0, i).concat(options.slice(i + 1, nums.length));
      current.push(choice);
      helper(current, newOptions);
      current.pop();
    }
  };
  
  helper([], nums);
  
  return output;
};

console.log(permute2([1,2,3]));
console.log(permute2([1,3,6,9]));
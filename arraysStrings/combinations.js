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


/// Soln in python
// def combine2(self, n, k):
//     res = []
//     self.dfs(xrange(1,n+1), k, 0, [], res)
//     return res
    
// def dfs(self, nums, k, index, path, res):
//     #if k < 0:  #backtracking
//         #return 
//     if k == 0:
//         res.append(path)
//         return # backtracking 
//     for i in xrange(index, len(nums)):
//         self.dfs(nums, k-1, i+1, path+[nums[i]], res)
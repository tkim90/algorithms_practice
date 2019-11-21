// set queue with root
// set output array
// push [root] to output

// while queue is not empty
  // update queueLength
  // for i -> queueLength
    // update current node as first item in queue
    // remove that item from queue
    // define nextLevelArr = []
    // if node.left, push to queue && nextLevelArr
    // if node.right, push to queue && nextLevelArr

var levelOrder = function(root) {
  if (root === null) return [];
  let queue = [root];
  let output = [[root.val]];
  
  while (queue.length > 0) {
    const queueLength = queue.length;
    
    const nextLevelArr = [];
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      if (node.left) {
        nextLevelArr.push(node.left.val);
        queue.push(node.left);
      }
      if (node.right) {
        nextLevelArr.push(node.right.val);
        queue.push(node.right);
      }
    }
    if (nextLevelArr.length > 0) output.push(nextLevelArr);
  }
  return output;
};


// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.


// DFS
// By definition, the depth of a binary tree is the number of steps to the leaf node.
// So we can get the depth by counting how many times we hit a "right" node.

// * movie theater analogy - https://www.youtube.com/watch?v=D2cFSDfg0So
// ask the person in the row below you what row they're in
// they ask the person below them
// continue all the way to the bottom
// the last person will know that they're at row 0
// bubble up the answer + 1 (my own row)

// base: root is null => 0
// recurse:
  // left: recurse(left)
  // right: recurse(right)
  // return Max(left, right) + 1;

const maxDepth = (root) => {
  if (root === nul) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

var maxDepth = function(root) {
  const traverse = (current, depth = 0) => {
    if (current === null) return depth;
    depth++;
    return Math.max(traverse(current.left, depth), traverse(current.right, depth));;
  };
  
  return traverse(root);
};
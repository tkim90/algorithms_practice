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
const maxDepth = (root) => {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right) + 1);
};

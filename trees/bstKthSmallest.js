var kthSmallest = function(root, k) {
  let result = null;
  
  const helper = (node) => {
    if (!node) return ;
    helper(node.left);
    k--;
    if (k === 0) {
      result = node.val;
      return ;
    }
    helper(node.right);
  }
  helper(root);
  return result;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

const tree = new TreeNode(3);
tree.left = new TreeNode(1);
tree.right = new TreeNode(4);
tree.left.right = new TreeNode(2);
console.log(kthSmallest(tree, 3)); // 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
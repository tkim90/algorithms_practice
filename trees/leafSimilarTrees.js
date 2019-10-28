// https://leetcode.com/problems/leaf-similar-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  // in order traversal of each tree
  // save leaf sequence of each tree
  // compare if sequences are the same
  
  const buildLeafSequence = (tree) => {
    let sequence = [];
    
    const inOrderTraversal = (tree) => {
      // console.log(`CURRENT: ${tree.val}`)
      if (tree.left === null && tree.right === null) {
        // console.log(`PUSHING: ${tree.val}`)
        sequence.push(tree.val);
      }
      if (tree.left) inOrderTraversal(tree.left);
      if (tree.right) inOrderTraversal(tree.right);
    }
    inOrderTraversal(tree);
    // console.log(`seq inside inOrderTraversal ${sequence}`)
    return sequence;
  }
  
  const seq1 = buildLeafSequence(root1);
  const seq2 = buildLeafSequence(root2);
  // console.log(`seq1: ${seq1}`);
  // console.log(`seq2: ${seq2}`);
  return seq1.toString() === seq2.toString();
};

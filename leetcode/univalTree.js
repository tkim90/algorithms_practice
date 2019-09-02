// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

const countUnivalNodes = (root) => {
  let count = 0;

  const helper = (node) => {
    if (node !== null) {
      console.log('node at error ', node)
      if (node.left === null && node.right === null) {
        count++;
      } else if (node.left.val === node.val && node.right.val === node.val) {
        count++;
      }
      helper(node.left);
      helper(node.right);
    }
  };
  helper(root);
  return count;
};

class UnivalTree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const chai = require('chai').expect;

beforeEach(() => {
  const uni = new UnivalTree(0);
  uni.left = new UnivalTree(1);
  uni.right = new UnivalTree(0);
  uni.right.left = new UnivalTree(1);
  uni.right.right = new UnivalTree(0);
  uni.right.right.right = new UnivalTree(0);
  uni.right.left.left = new UnivalTree(1);
  uni.right.left.right = new UnivalTree(1);  
})

it('should find counts in a unival tree', () => {

});
// Create a binary search tree that satisfies the following
// A node will have a left / right node, which can point to an integer or null.
// The left node's vaule must be less than the current node's value.
// The right node's value must be greater than or equal to the current node's value.
// Create an insert, contains, and remove node features.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;    
  }

  insert(value) {
    let currentNode = this;
    while(true) {
      // left not null, value is less, go left.
      // value less
      //  not null: go left
      //  null: insert
      if (value < currentNode.value) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new BST(value);
          break;
        }
      } else {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new BST(value);
          break;
        }
      }
    } // end while
    return currentNode;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  remove(value, parentNode=null) {
    // edge cases:
    // traverse left or right, updating parent along the way
    // otherwise,
    // no children
    // 1 child or more
    // 2 children
    // 2 children + root      
    let currentNode = this;

    while (currentNode !== null) {
      if (value < currentNode.value) { // go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) { // go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left !== null && currentNode.right !== null) { // both children present
          currentNode.value = currentNode.right.getMinValue(); // replace current val with smallest in right tree
          // recursion to remove the smallest value you just replaced with from its original position
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode !== null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            currentNode.value = null;
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue(value) {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

let bst = new BST(10);
bst.left = new BST(7);
bst.right = new BST(8);
bst.left.left = new BST(3);
bst.right.right = new BST(10);

 //    10
 //    /\
 //   7  8
 //  /    \
 // 3     10

const count = function(node) {
  console.log(node)
  if (node) {
    return count(node.left) + count(node.right) + 1;
  } else {
    return 0;
  }
}

console.log('counts total nodes in bst: ', count(bst) === 5, 'actual: ', count(bst));
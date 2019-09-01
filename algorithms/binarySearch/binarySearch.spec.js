const expect = require('chai').expect;
const binarySearchIterative = require('./binarySearchIterative').binarySearchIterative;
const binarySearchRecursive = require('./binarySearchRecursive').binarySearchRecursive;

// return target's index in the input array using binary search

describe('binary search iterative', () => {
  it('finds x', () => {
    expect(binarySearchIterative([1, 3, 5, 7, 10], 1)).to.equal(0);
  });

  it('finds with length 1', () => {
    expect(binarySearchIterative([1], 1)).to.equal(0);
  });

  it('target doesn\'t exist in array', () => {
    expect(binarySearchIterative([1, 3, 5, 7, 10], 22)).to.equal(-1);
  });
});

describe('binary search recursive', () => {
  it('finds x', () => {
    expect(binarySearchRecursive([1, 3, 5, 7, 10], 1)).to.equal(0);
  });

  it('finds with length 1', () => {
    expect(binarySearchRecursive([1], 1)).to.equal(0);
  });

  it('target doesn\'t exist in array', () => {
    expect(binarySearchRecursive([1, 3, 5, 7, 10], 22)).to.equal(-1);
  });
});
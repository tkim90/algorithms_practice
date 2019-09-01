var expect = require('chai').expect;
var mergeSort = require('./mergeSort.js').mergeSort;

describe('mergeSort', () => {
  it('sorts small arrays', () => {
    let sorted = mergeSort([1, 5, 9, 0]);
    expect(sorted).to.eql([0, 1, 5, 9]);
  });

  it('sorts large arrays', () => {
    let sorted = mergeSort([1, 5, 9, 0, 2, 3, 10, 22, 31, 23, 100, 7, 8]);
    expect(sorted).to.eql([0, 1, 2, 3, 5, 7, 8, 9, 10, 22, 23, 31, 100]);
  })

  it('sorts ararys with duplicates', () => {
    let sorted = mergeSort([1, 4, 2, 1]);
    expect(sorted).to.eql([1, 1, 2, 4]);
  })
})
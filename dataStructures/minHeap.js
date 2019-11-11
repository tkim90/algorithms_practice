module.exports = MinHeap;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    // this.bubbleUp();
  }

  bubbleUp() {

  }
}

// [5, 6, 7] push 2
// [5, 6, 7, 2]
// [5, 6, 7, 2] - if parent
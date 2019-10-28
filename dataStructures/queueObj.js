class Queue {
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(val) {
    this.storage[this.last++] = val;
  }

  dequeue() {
    let toBeDeleted = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }

  size() {
    return this.last - this.first;
  }
}

// var q = new Queue();
// q.enqueue(0);
// q.enqueue(1);
// q.enqueue(2);
// q.dequeue();
// console.log(q.size());

module.exports = Queue;
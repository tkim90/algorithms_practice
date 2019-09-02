class Queue {
  constructor(storage, start, end, size) {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end++] = value;
  }

  dequeue() {
    var toBeDel = this.storage[this.start];
    delete this.storage[this.start];
    this.size() && this.start++;
    return toBeDel;
  }

  size() {
    return this.end - this.start;
  }
}

var q = new Queue();
q.enqueue(10);
q.dequeue();
q.enqueue(40);
q.enqueue(22);
q.dequeue();
console.log(q);
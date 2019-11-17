class Queue {
  constructor() {
    this._storage = {};
    this._first = 0;
    this._last = 0;
  }

  enqueue(value) {
    this._storage[this._last] = value;
    this._last++;
    return value;
  }

  dequeue() {
    let deleted = this._storage[this._first];
    delete this._storage[this._first];
    if (this._first !== 0) this._first++;
    return deleted;
  }

  size() {
    return this._last - this._first;
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }
}

// var q = new Queue();
// q.enqueue(0);
// q.enqueue(1);
// q.enqueue(2);
// console.log(q.dequeue());
// q.dequeue();
// q.dequeue();
// q.enqueue(0);
// q.enqueue(1);
// console.log(q)

module.exports.Queue = Queue;
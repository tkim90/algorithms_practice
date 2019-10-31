// Queue implementation with Stack.

const Stack = require('./stackObj.js');

class QueueWithStack {
  constructor() {
    this._storage = new Stack();
    this._dummy = new Stack();
  }

  enqueue(val) {
    this._storage.push(val);
    return val;
  }

  dequeue() {
    while (!this._storage.isEmpty()) {
      let popped = this._storage.pop();
      this._dummy.push(popped);
    }
    let deleted = this._dummy.pop();
    while (!this._dummy.isEmpty()) {
      let popped = this._dummy.pop();
      this._storage.push(popped);
    }
    return deleted;
  }
}

let q = new QueueWithStack();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
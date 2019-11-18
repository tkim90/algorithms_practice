// Stack implementation with Queues.
const Queue = require('./queueObj.js');

class Stack {
  constructor() {
    this.q = new Queue();
    this.dummy = new Queue();
  }

  push(val) {
    // add new element to last
    this.q.enqueue(val);
  }

  pop() {
    // remove all except last element from q1
    // store all removed elements to q2
    // remove last element from q1
    // swap q1 and q2

    while (this.q.size() > 1) {
      this.dummy.enqueue(this.q.dequeue());
    }
    const popped = this.q.dequeue();
    this.q = this.dummy;
    this.dummy = new Queue();
    return popped;
  }

  top() {
    // traverse to last element and return it
    while(this.q.size() > 1) {
      this.dummy.enqueue(this.q.dequeue());
    }
    const top = this.q.dequeue();
    this.dummy.enqueue(top);
    this.q = this.dummy;
    this.dummy = [];
    return top;
  }

  isEmpty() {
    return this.top ? false : true;
  }
}

module.exports.Stack = Stack;
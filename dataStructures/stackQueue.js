// Stack implementation with Queues.
const Queue = require('./queueObj.js');

class StackQueue {
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
    this.q.dequeue();
    this.q = this.dummy;
    this.dummy = new Queue();
  }
}

// var stack = new StackQueue();
// stack.push(50);
// stack.push(45);
// stack.push(100);
// stack.push(5);
// stack.pop();
// stack.pop();
// stack.push(8);
// stack.push(8);
// stack.pop();
// stack.pop();
// console.log(stack);
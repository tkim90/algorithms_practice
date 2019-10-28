// Stack implementation with Objects.

class Stack {
  constructor() {
    this.storage = {};
    this.idx = 0;
    this.size = 0;
  }

  push(val) {
    this.idx++;
    this.storage[this.idx] = val;
    this.size++;
    console.log(`adding ${val}, idx: ${this.idx}`)
    return val;
  }

  pop() {
    let toBeDeleted = this.storage[this.idx];
    console.log(`deleting: ${toBeDeleted}, idx: ${this.idx}`)
    delete this.storage[this.idx];
    if (this.size) this.size--;
    this.idx--;
    return toBeDeleted;
  }
}

// var stack = new Stack();
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
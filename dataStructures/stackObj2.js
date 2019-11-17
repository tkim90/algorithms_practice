// Stack implementation with Objects.

class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size++;
    return value;
  }

  pop() {
    this._size && this._size--;
    const deleted = this._storage[this._size];
    delete this._storage[this._size];

    return deleted;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0 ? true : false;
  }
}

// var stack = new Stack();
// stack.push(50);
// stack.push(45);
// stack.push(100);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack._size);
// console.log(stack);

module.exports.Stack = Stack;
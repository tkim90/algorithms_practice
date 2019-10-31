// Stack implementation with Objects.

class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(val) {
    this._storage[this._size] = val;
    this._size++;
    return val;
  }

  pop() {
    this._size && this._size--;
    let deleted = this._storage[this._size];
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

var stack = new Stack();
stack.push(50);
stack.push(45);
// stack.push(100);
// stack.push(5);
// stack.pop();
// stack.pop();
// stack.push(8);
// stack.push(8);
stack.pop();
stack.pop();  
console.log(stack);
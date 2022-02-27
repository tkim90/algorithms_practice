// Stack implementation with Objects.

class Stack {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  push(val) {
    this._storage[this._size] = val;
    this._size++;
    return val;
  }

  pop() {
    // Have to decremnt size before accessing the last element
    // because when you push, you are incrementing the size
    // after pushing.

    // After Pushing
    // size = 0

    // before you push, your pointer is at idnex 0
    // stack.push(1)
    // size = 0
    // stack[0] = val -> [1]
    // size = 1

    // before yo upush, pointer is at index 1
    // stack.push(2)
    // size = 1
    // stack[1] = val -> [1,2]
    // size = 2

    // stack.pop()
    // size = 2
    // size = 1
    //  0 1
    // [1,2]
    // delete storage[1]
    // +
    // index (aka size) is always 1+ the len
    if (this._size > 0) this._size--;
    const deleted = this._storage[this._size];
    delete this._storage[this._size];

    return deleted;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this.__size;
  }
}

const stack = new Stack();
stack.push(1);
console.log(stack);

export.
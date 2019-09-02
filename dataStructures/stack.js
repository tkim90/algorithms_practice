class Stack {
  constructor(storage, idx, size) {
    this.storage = {};    
    this.idx = 0;
    this.size = 0;
  }

  push(value) {
    this.idx++;
    this.storage[this.idx] = value;
    this.size++;
    return value;
  }

  pop() {
    var deletedVal = this.storage[this.idx];
    delete this.storage[this.idx];
    this.size--;
    return deletedVal;
  }
}

var stack = new Stack();
stack.push(50);
stack.push(45);
stack.pop();
stack.push(100);
stack.push(5);
console.log(stack);
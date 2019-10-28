const List = require('./linkedList2.js');

class StackLinkedList {
  constructor(val) {
    this.storage = new List.LinkedList();
    this.idx = 0;
    this.size = 0;
    this.top = this.storage.head ? this.storage.head.val : null;
  }

  push() {
    this.idx++;
    this.size++;
    this.storage.addToTail(this.idx);
    return this.storage.head.val;
  }

  pop() {
    let oldHead = null;
    if (this.size) {
      oldHead = this.storage.head.val;
      this.storage.removeHead();
      this.size--;
      this.idx--;
    }
    return oldHead;
  }
}

// var s = new StackLinkedList();
// console.log(`Adding: ${s.push()}`);
// console.log(`Adding: ${s.push()}`);
// console.log(`Adding: ${s.push()}`);
// console.log(`Adding: ${s.push()}`);
// console.log(`Adding: ${s.push()}`);
// console.log(`Removing: ${s.pop()}`);
// console.log(`Stack: ${JSON.stringify(s.storage)}`);
// console.log(s.size);
// console.log(`Stack: ${s.storage.traverseList()}`);

module.exports = StackLinkedList;
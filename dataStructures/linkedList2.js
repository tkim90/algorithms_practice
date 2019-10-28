class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const newTail = new Node(val);

    if (!this.tail) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      const oldTail = this.tail;
      this.tail = newTail;
      oldTail.next = newTail;
    }
  }

  addToHead(val) {
    const newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const oldHead = this.head;
      this.head = newHead;
      newHead.next = oldHead;
    }
  }

  traverseList() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }
  }

  contains(target) {
    let node = this.head;
    while (node) {
      if (node.val === target) return true;
      node = node.next;
    }
    return false;
  }

  removeHead() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let node = this.head;
    while (node) {
      if (node.next === this.tail) {
        this.tail = node;
        node.next = null;
      }
      node = node.next;
    }
  }
}

// TEST
// var l = new LinkedList();
// l.addToTail(1);
// l.addToTail(2);
// l.addToTail(3);
// l.addToHead(4);
// l.addToHead(5);
// l.addToTail(6);
// console.log(l);
// l.removeTail();
// console.log(l);
// console.log(l.head);
// console.log(l);
// l.traverseList();
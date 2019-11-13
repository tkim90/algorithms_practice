// DOUBLY LINKED LIST implementation:
// cache = new DoublyLinkedList();
// this.size = 0;

// get(item):
//     traverse linked list, each time checking if you found the item
//         Y:
//             remove item from wherever it is
//             add item to tail
//             return it
//         N: put(item)

// put(item):
//     check if at capacity -> if this.size >= this.capacity
//         Y: removeFromhead()
//         N: addToTail
//     return tail (since that item was just added to the tail)

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity = 3) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    const node = this.cache[key];
    if (node) {
      const val = node.value;
      this.remove(key);
      this.put(key, val);
      console.log(`Get complete, moving ${key} to head.`)
    } else {
      return -1;
    }
  }

  // add to head of linked list
  put(key, value) {
    const node = new Node(key, value);
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      const oldHeadNode = this.head;
      oldHeadNode.prev = node;
      // node.next = oldHeadNode;
      this.head = node;
      // node.next = oldHeadNode;
    }

    this.cache[key] = this.head;
    this.size++;
    // console.log(`Insert complete: ${JSON.stringify(this.cache[key])}`)
  }

  ensureLimit() {
    if (this.size === this.capacity) {
      console.log(`At capacity. removing ${this.tail.value}.`);
      this.remove(this.tail);
    }
  }

  remove(key) {
    const node = this.cache[key];
    if (node === undefined) return -1;

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    // console.log(`Removing ${key}...`)
    delete this.cache[key];
    this.size--;
    // console.log(`Confirming removal: ${this.cache[key]}`)
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }
}

const lru = new LRUCache();
lru.put(1,1);
lru.put(2,2);
lru.get(1);
lru.put(3,3);
lru.put(4,4);
console.log(`Head: ${JSON.stringify(lru.head)}`)
console.log(`Tail: ${JSON.stringify(lru.tail)}`)
// console.log(lru.head.value, lru.tail.value, lru.size, lru.capacity);

// lru.put(3,3);
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


class LRUCacheDoublyLinkedList {
  constructor(capacity) {
    this.capacity = capacity;
  }

  get(key) {

  }

  put(key, value) {
    
  }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
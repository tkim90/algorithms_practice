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
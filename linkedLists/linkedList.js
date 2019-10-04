var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
    };

  list.removeHead = function() {

    if (list.head === null) {
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
      };

  list.contains = function(target) {

    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
      };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
var list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

console.log(list);

const reverse = (linkedList) => {
  let initTail = linkedlist.tail;
  let stoppingNode = null;
  let pointer = linkedList.head;

  while(linkedList.head !== initTail) {
    if (pointer.next === null) {
      pointer = linkedList.head;
    }
    swapNodes(pointer);
    pointer = pointer.next;
  }
  return linkedList;
}

const swapNodes = (node) => {
  let nextNode = node.next;
  node.next = node;
  
  return node;
}
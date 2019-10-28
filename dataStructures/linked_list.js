let LinkedList = function() {
  var list = {};
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  // if no node in list
  // if head in list
  if (Object.keys(list).length === 2) {
    console.log("Empty")
    var node = new Node(value);
    this.head = node;
    this.tail = node;
    list[node.value] = node;
    console.log("Adding node to tail: ", node);
  } else {
    var oldTail = this.tail;
    var newTail = new Node(value);
    this.tail = newTail;
    oldTail.next = newTail;
  }
};

LinkedList.prototype.contains = function(value) {
  var helper = function(currentNode) {
    var currentNode = currentNode || this.head;
    if (currentNode.value === value) {
      return true;
    } else {
      helper(currentNode.next);
    }
    return false;
  };
  helper();
};

LinkedList.prototype.removeHead = function() {
  // find head
  // update head
  var oldHead = list.head;
  var newHead = list.head.next;
  list.head = newHead;
};

let Node = function(value) {
  this.value = value;
  this.next = null;
}

// TEST
var list = new LinkedList();
console.log(Object.keys(list).length);
list.addToTail(5);
// list.contains(5);
// console.log('Contains: ', list.contains(5));
list.addToTail(6);
console.log(list);
list.removeHead();
console.log(list);
let List = function(key, val) {
  this.val = val;
  this.key = key;
  this.next = null;
  this.prev = null;
}

let LRUCache = function(capacity) {
  this.capacity = capacity;
}
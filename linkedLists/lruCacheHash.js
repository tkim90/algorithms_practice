// LRU cache Hash/Object implementation.

var LRUCacheHash = function(capacity) {
  this.size = 0;
  this.cache = {};
  this.store = {};
  this.count = 0;
  this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {

};

LRUCache.prototype.getMin = function() {

}

LRUCache.prototype.put = function(key, value) {

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  HASH implementation:
// initialize with store, cache, count
// *cache stores item key and value*
// *store stores item key and count, where count is the refernece to least or most recently used. The higher the count, the most recently used it is.*

// get(item):
//     if not in cache, add to it
//     add to store, where key = item and value = count
//     increment this.count
//     return item

// getMin(): *gets item with lowest count, aka least recently used*
//     instantiate min variable
//     scan thru this.store
//         update min with math.min, storing the key each time
//     return min

// put(item):
//     if item is not in store, increment size
//     check if item is over capacity
//         if yes, get min and delete it from store and cache
//         decrement this.size
//     add new key to cache and store
//         assign key to store and count
//         assign key to cache
//         increment count
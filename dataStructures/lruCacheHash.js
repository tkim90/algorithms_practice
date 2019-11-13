// LRU cache Hash/Object implementation.

class LRUCacheHash {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.count = 0;
    this.store = {};
    this.cache = {};
  }

  get(key) {
    if(!(key in this.cache)) return -1;

    this.store[key] = this.count;
    this.count++;
    return this.cache[key];
  }

  getMin() {
    let min = null;
    for (let key in this.store) {
      if (min === null) min = key;
      else if (this.store[key] < this.store[min]) min = key;
    }

    return min;
  }

  put(key, value) {
    if (!(key in this.cache)) this.size++;

    if (this.size > this.capacity) {
      let min = this.getMin();

      delete this.store[min];
      delete this.cache[min];
      this.size--;
    }

    this.store[key] = this.count;
    this.count++;
    this.cache[key] = value;
  }
}

// TEST //
let lru = new LRUCacheHash(2);
lru.put(1,1);
lru.put(2,2);
console.log(lru);
lru.get(1);
lru.put(3,3);
console.log(lru);


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

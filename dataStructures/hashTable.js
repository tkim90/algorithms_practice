export default class HashTable {
  constructor() {
    this._storage = LimitedArray(this._limit);
    this._limit = 8; // hash table _limit
    this._size = 0; // tuple count
  }

  insert(key, val) {
    const storageIndex = getIndexBelowMaxForKey(key, this._limit);
    const bucket = this._storage.get(storageIndex);

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = val;
      }
    }
    
    bucket[i].push(key, val);
    this._storage.set(storageIndex, value);
    this._size++;

    if (this._size > this._limit * 0.75) {
      this.resize(this._limit * 2);
      // resize not implemented yet
    }
  }

  resize(newLimit) {
    // save oldStorage
    // check if new limit is greater than current limit
    // reset this limit, storage, size

    // loop thru storage
      // loop thru bucket
        // rehash every key/val:
        // get new hash value from key and limit
        // insert key, val
    // ? bind to this
  }
}


/// HASH FUNCTION ///
/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

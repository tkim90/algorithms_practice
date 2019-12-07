// Write a function that deeply copies the input.
// Input could be primitives(number, string, booleans), arrays, and objects.

// Base:
// if primitive, return it
// if array, scan and return a slice copy
// if object, create new target obj, loop thru keys and assign keys to new obj.

const deepCopy = (obj) => {
  if (!obj) {
    return null;
  }

  if (typeof obj === 'string' || typeof obj === 'number') {
    return obj;
  }

  if (Array.isArray(obj) === true) {
    return obj.slice();
  }

  if (typeof obj === 'object') {
    let newObj = {};
    for (let key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
  }
};

let a = 'a';
let b = deepCopy(a);
console.log(`Should be true: ${a===b}`);

let c = 1;
let d = deepCopy(c);
console.log(`Should be true: ${c===d}`);

let e = [1,2,3];
let f = deepCopy(e);
console.log(`Should be false for Arrays: ${e===f}`);

a = [1, 2, {
  'key1': 1,
  'key2': 'hello',
}];
b = deepCopy(a);
console.log(`Should be false for Arrays with objects as elements: ${a===b}`);
console.log(a, b);

a = {
  'key1': 1,
  'key2': 'hello',
};
b = deepCopy(a);
console.log(`Should be false for copying objects: ${a===b}`);
console.log(a, b);

a = {
  'key1': 1,
  'key2': {
    'key3': 'a'
  },
};
b = deepCopy(a);
console.log(`Should be false for nested objects: ${a===b}`);
console.log(a, b);

a = {
  'key1': 1,
  'key2': {
    'key3': [1,2,3]
  },
};
b = deepCopy(a);
console.log(`Should be false for nested objects w/ arrays: ${a===b}`);
console.log(a, b)
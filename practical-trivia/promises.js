// write a promise from scratch.

// async function
// return it

const asyncFunc = (a) => {
  return new Promise((resolve) => {
    console.log(resolve || 'error');
  })
};
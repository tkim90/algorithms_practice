// write a promise from scratch.

const wait = (time, cb) => new Promise((resolve, reject) => {
  return setTimeout(resolve(cb.apply(this)), time);
})
  .then( v => console.log('done processing.'));

wait(500, function() { console.log('HELLO') });


// async function
// return it

const asyncFunc = (a) => {
  return new Promise((resolve) => {
    console.log(resolve || 'error');
  })
};

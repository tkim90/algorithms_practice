const expect = require('chai').expect;
const Queue = require('../queueObj2').Queue;

describe('Enqueue() - regression test', () => {
  const q = new Queue();

  it('It should create a new item', () => {
    q.enqueue(10);
    expect(q._storage).to.eql({'0': 10});
  });

  it('It should create a new item & update the last item in the queue', () => {
    q.enqueue(20);
    expect(q._storage[q._last - 1]).to.eql(20);
  });

  it('It should return the value you just added', () => {
    const added = q.enqueue(30);
    expect(added).to.eql(30);
  });
});

describe('Dequeue() - regression test', () => {
  const q = new Queue();

  it('It should not error if dequeueing an empty queue', () => {
    q.dequeue();
    expect(q._storage).to.eql({});
  });

  it('It should remove the first item in the queue', () => {
    q.enqueue(10);
    q.enqueue(20);
    const deleted = q.dequeue();
    expect(deleted).to.eql(10);
  });
});

describe('size() & isEmpty() - regression test', () => {
  const q = new Queue();

  it('It should return true for isEmpty()', () => {
    expect(q.isEmpty()).to.eql(true);
  });

  it('It should return 0 for size()', () => {
    expect(q.size()).to.eql(0);
  });

  it('It should return false for isEmpty()', () => {
    q.enqueue(1);
    expect(q.isEmpty()).to.eql(false);
  });

  it('It should return 3 for size()', () => {
    q.enqueue(0);
    q.enqueue(1);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    console.log(q)
    q.enqueue(0);
    q.enqueue(1);
    q.enqueue(2);
    console.log(q)
    expect(q.size()).to.eql(3);
  });
});
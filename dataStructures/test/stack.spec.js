const expect = require('chai').expect;
const Stack = require('../stackObj2').Stack;

describe('Push() - regression test', () => {
  const s = new Stack();
  
  it('Should not error when popping from an empty stack', () => {
    s.pop();
    expect(s).to.eql({ _storage: {}, _size: 0 });
  });
});

describe('Pop() - regression test', () => {
  const s = new Stack();
  
  it('Should not error when popping from an empty stack', () => {
    s.pop();
    expect(s).to.eql({ _storage: {}, _size: 0 });
  });

  it('Should return the popped value', () => {
    s.push(10);
    const deleted = s.pop();
    expect(deleted).to.eql(10);
  });
});

describe('Add and remove from an empty Stack', () => {
  const s = new Stack();
  
  it('Should add item to top of stack', () => {
    s.push(10);
    expect(s).to.eql({ _storage: { '0': 10 }, _size: 1 });
  });

  it('Should remove an item to top of stack (non-empty)', () => {
    s.pop(10);
    expect(s).to.eql({ _storage: {}, _size: 0 });
  });
});

describe('Add and remove from an existing, non-empty Stack', () => {
  const s = new Stack();
  s.push(10);
  s.push(20);
  s.push(30);
  
  it('Should remove current top item from stack', () => {
    const deleted = s.pop();
    expect(deleted).to.eql(30);
  });

  it('Should empty the stack', () => {
    s.pop();
    s.pop();
    expect(s).to.eql({ _storage: {}, _size: 0 });
  });
});
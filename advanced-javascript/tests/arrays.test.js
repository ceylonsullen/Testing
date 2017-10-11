const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    // begin here
    it('should invoke the function for each index on array', () => {
      const each = arrayFunctions.each;
      callback = sinon.spy();
      each([1, 2], callback)
      expect(callback).to.have.callCount(2);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should invoke the function for map index on array', () => {
      const map = arrayFunctions.map;
      callback = sinon.spy();
      map([1, 2], callback)
      expect(callback).to.have.callCount(2);
    });
    it('should return a new array', () => {
      const map = arrayFunctions.map;
      callback = (x) => x * 2;
      const result = map([1, 2], callback)
      expect(result).to.deep.equal([2, 4]);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    // it('should invoke the function for each index on array', () => {
    //   const reduce = arrayFunctions.reduce;
    //   callback = sinon.spy();
    //   reduce([1, 2, 3], callback)
    //   expect(callback).to.have.callCount(3);
    // });
    // it('should return a new array', () => {
    //   const reduce = arrayFunctions.reduce;
    //   callback = (x) => x * 2;
    //   const result = reduce([1, 2], callback)
    //   expect(result).to.equal([2, 4]);
    // });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should invoke the function for map index on array', () => {
      const find = arrayFunctions.find;
      callback = sinon.spy();
      find([1, 2], callback)
      expect(callback).to.have.callCount(2);
    });
    it('should return a new array', () => {
      const find = arrayFunctions.find;
      callback = (x) => x === 2;
      const result = find([1, 2], callback)
      expect(result).to.equal(2);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    // it('should invoke the function for map index on array', () => {
    //   const filter = arrayFunctions.filter;
    //   callback = sinon.spy();
    //   filter([1, 2], callback)
    //   expect(callback).to.have.callCount(2);
    // });
    // it('should return a new array', () => {
    //   const filter = arrayFunctions.filter;
    //   callback = (x) => x * 2;
    //   const result = filter([1, 2], callback)
    //   expect(result).to.equal([2, 4]);
    // });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return a new flattened array', () => {
      const flatten = arrayFunctions.flatten;
      const result = flatten([1, [2]])
      expect(result).to.equal([1, 2]);
    });
  });
});

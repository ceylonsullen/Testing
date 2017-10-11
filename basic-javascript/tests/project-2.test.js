const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('result should be a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest(10, 5), 'number');
    });
    it('result should be the largest number', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(10, 5), 10);
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('result should be a string', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting('German'), 'string');
    });
    it('result should be the correct greeting', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('result should be the correct greeting if no argument passed in', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting(), 'Hello!');
    });
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('result should be a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(10), 'boolean');
    });
    it('should return true if value is 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(5), true);
    });
    it('should return true if value is 10', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(10), true);
    });
    it('should return false if value is neither 10 nor 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(11), false);
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('result should be a boolean', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(10), 'boolean');
    });
    it('should return true if value is between 50 and 20, exclusive', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(21), true);
    });
    it('should return false if value is not in range', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(20), false);
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('result should be a boolean', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(10), 'boolean');
    });
    it('should return true if value is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5), true);
    });
    it('should return false if value is not an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(10.5), false);
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('result should be a string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(10), 'string');
    });
    it('should return buzz if value is a multiple of 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(5), 'buzz');
    });
    it('should return fizz if value is a multiple of 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(6), 'fizz');
    });
    it('should return fizzbuzz if value is a multiple of both 5 and 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(30), 'fizzbuzz');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('result should be a boolean', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime(10), 'boolean');
    });
    it('should return false if value is not prime', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(6), false);
    });
    it('should return true if value is prime', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(31), true);
    });
    it('should return false if value is less than 2', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(1), false);
      assert.equal(isPrime(0), false);
      assert.equal(isPrime(-5), false);
    });
  });
  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return undefined if value is not an array or an empty array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([]), undefined);
      assert.equal(returnFirst(0), undefined);
      assert.equal(returnFirst(''), undefined);
      assert.equal(returnFirst(true), undefined);
    });
    it('should return the first index in the array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([0, 1, 2, 3]), 0);
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return undefined if value is not an array or an empty array', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([]), undefined);
      assert.equal(returnLast(0), undefined);
      assert.equal(returnLast(''), undefined);
      assert.equal(returnLast(true), undefined);
    });
    it('should return the last index in the array', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 3]), 3);
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return undefined if value is not an array', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength(0), undefined);
      assert.equal(getArrayLength(true), undefined);
    });
    it('should return the length of the array', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([1, 2, 3, 4]), 4);
      assert.equal(getArrayLength([]), 0);
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return argument if value is not an array or an empty array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.equal(incrementByOne(0), 0);
      assert.equal(incrementByOne(true), true);
      assert.deepEqual(incrementByOne('123'), '123');
      assert.deepEqual(incrementByOne([]), []);
    });
    it('should return each item in the array incremented by one', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.deepEqual(incrementByOne([0, 1, 2, 3]), [1, 2, 3, 4]);
    });
  });
  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return the second argument as the last item on the array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.deepEqual(addItemToArray([], 4), [4]);
    });
    it('should push to an empty array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.deepEqual(addItemToArray([], 4), [4]);
    });
  });
  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return the second argument as the first item on the array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.deepEqual(addItemToFront([], 4), [4]);
    });
    it('should add to an empty array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.deepEqual(addItemToFront([], 4), [4]);
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('result should be a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence([10, 11, 12]), 'string');
    });
    it('should return the expected value', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(['6', '7', '8']), '6 7 8');
    });
    it('should return empty string if no words are passed in', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence([]), '');
    });
  });
  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('result should be a boolean', () => {
      const contains = funcs.contains;
      assert.typeOf(contains([1, 2], 3), 'boolean');
    });
    it('should return false if value is not in array', () => {
      const contains = funcs.contains;
      assert.equal(contains([1, 2], 3), false);
    });
    it('should return true if value is in array', () => {
      const contains = funcs.contains;
      assert.equal(contains([1, 2], 2), true);
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('result should be a boolean', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers([1, 2]), 'number');
    });
    it('should return the sum of all numbers in the array', () => {
      const addNumbers = funcs.addNumbers;
      assert.equal(addNumbers([1, 2]), 3);
    });
  });
  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('result should be a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore([1, 2]), 'number');
    });
    it('should return the average', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.equal(averageTestScore([1, 2, 3]), 2);
    });
  });
  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('result should be a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber([1, 2]), 'number');
    });
    it('should return the average', () => {
      const largestNumber = funcs.largestNumber;
      assert.equal(largestNumber([1, 2, 3]), 3);
    });
  });
});

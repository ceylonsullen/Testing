const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('result should be a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(10), 'number');
    });
    it('result should be the argument multiplied by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(10), 100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('result should be a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(10), 'number');
    });
    it('result should be the argument subtracted by 5', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('result should be a boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('he', 'she'), 'boolean');
    });
    it('should return true if arguments are of equal length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('he', 'so'), true);
    });
    it('should return false if arguments are not of equal length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('the', 'elves'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('result should be a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(1, 2), 'boolean');
    });
    it('should return true if arguments are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1, 1), true);
    });
    it('should return false if arguments are not equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1, 2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('result should be a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(1), 'boolean');
    });
    it('should return true if argument is less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(10), true);
    });
    it('should return false if argument is greater than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
    it('should return false if argument is ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(90), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('result should be a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(51), 'boolean');
    });
    it('should return true if argument is greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(51), true);
    });
    it('should return false if argument is less than or equal to fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(50), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('result should be a number', () => {
      const add = funcs.add;
      assert.typeOf(add(5, 1), 'number');
    });
    it('should be the sum of the two arguments passed in', () => {
      const add = funcs.add;
      assert.equal(add(5, 1), 6);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('result should be a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(5, 1), 'number');
    });
    it('should be the difference of the two arguments passed in', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(5, 1), 4);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('result should be a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(5, 1), 'number');
    });
    it('should be the product of the two arguments passed in', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 1), 5);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('result should be a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(5, 2), 'number');
    });
    it('should be the remainder of the two arguments passed in', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(5, 2), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('result should be a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(5), 'boolean');
    });
    it('should return false if the argument is odd', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(5), false);
    });
    it('should return true if the argument is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(4), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('result should be a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(5), 'boolean');
    });
    it('should return true if the argument is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(5), true);
    });
    it('should return false if the argument is even', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(4), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('result should be a number', () => {
      const square = funcs.square;
      assert.typeOf(square(5), 'number');
    });
    it('should be the square of the argument passed in', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('result should be a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(5), 'number');
    });
    it('should be the cube of the argument passed in', () => {
      const cube = funcs.cube;
      assert.equal(cube(5), 125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('result should be a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(5), 'number');
    });
    it('should be the value of the first argument raised to the power of the value of the second argument', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, 2), 25);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('result should be a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(5), 'number');
    });
    it('should be the rounded value of the argument passed in', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(25.49), 25);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('result should be a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(5), 'number');
    });
    it('result should be the argument rounded up', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(24.001), 25);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('result should be a number', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint(5), 'string');
    });
    it('should return the argument in a string with exclamation point at the end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint(5), '5!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('result should be a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames(5, 6), 'string');
    });
    it('should be the two arguments in a string with a space between them', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames(5, 6), '5 6');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('result should be a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting(5), 'string');
    });
    it('should properly display the greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting(5), 'Hello 5!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('result should be a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(5, 1), 'number');
    });
    it('should return the correct area', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(5, 1), 5);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('result should be a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(5, 1), 'number');
    });
    it('should be the area of a triangle given height and base length', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(5, 1), 2.5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('result should be a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(5), 'number');
    });
    it('should be the area of a circle given the radius', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(5), Math.PI * 25);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('result should be a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(5, 1, 1), 'number');
    });
    it('should return the correct volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(5, 1, 1), 5);
    });
  });
});

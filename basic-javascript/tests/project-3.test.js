const assert = require('chai').assert;
// var chai = require("chai");
// var sinon = require("sinon");
// var sinonChai = require("sinon-chai");
// chai.use(sinonChai);
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// describe('Project-3 Functions', () => {
//   describe('makeCat', () => {
//     it('should be a function', () => {
//       const makeCat = funcs.makeCat;
//       assert.typeOf(makeCat, 'function');
//     });
//     it('result should be a object', () => {
//       const makeCat = funcs.makeCat;
//       assert.typeOf(makeCat(10, 5), 'object');
//     });
//     it('name should be inside of result', () => {
//       const makeCat = funcs.makeCat;
//       assert.equal(makeCat(10, 5).name, 10);
//     });
//     it('nameage should be inside of result', () => {
//         const makeCat = funcs.makeCat;
//         assert.equal(makeCat(10, 5).age, 5);
//     });
//     it('meow method should be inside of result', () => {
//         const makeCat = funcs.makeCat;
//         assert.equal(makeCat(10, 5).meow(), 'Meow!');
//     });
//   });
//   describe('addProperty', () => {
//     it('should be a function', () => {
//       const addProperty = funcs.addProperty;
//       assert.typeOf(addProperty, 'function');
//     });
//     it('result should be a object', () => {
//       const addProperty = funcs.addProperty;
//       assert.typeOf(addProperty({}, 'laugh'), 'object');
//     });
//     it('result should be the correct addProperty', () => {
//       const addProperty = funcs.addProperty;
//       assert.deepEqual(addProperty({}, 'laugh'), {laugh: null});
//     });
//   });
//   describe('invokeMethod', () => {
//     it('should be a function', () => {
//       const invokeMethod = funcs.invokeMethod;
//       assert.typeOf(invokeMethod, 'function');
//     });
//     it('should invoke the method', () => {
//       const invokeMethod = funcs.invokeMethod
//       let book = sinon.spy();
//       const dog = {
//         bark(x) { book(x)}
//       };
//       dog['bark'](1);

//       sinon.assertCalledWith(book, "1");
//     });
//     it('should return true if value is 10', () => {
//       const invokeMethod = funcs.invokeMethod;
//       assert.equal(invokeMethod(10), true);
//     });
//     it('should return false if value is neither 10 nor 5', () => {
//       const invokeMethod = funcs.invokeMethod;
//       assert.equal(invokeMethod(11), false);
//     });
//   });
//   describe('multiplyMysteryNumberByFive', () => {
//     const dog = {
//         mysteryNumber: 5
//     }
//     it('should be a function', () => {
//       const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
//       assert.typeOf(multiplyMysteryNumberByFive, 'function');
//     });
//     it('result should be a number', () => {
//       const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
//       assert.typeOf(multiplyMysteryNumberByFive(dog), 'number');
//     });
//     it('should return true if value is between 50 and 20, exclusive', () => {
//       const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
//       assert.equal(multiplyMysteryNumberByFive(dog), 25);
//     });
//   });
//   describe('deleteProperty', () => {
//     it('should be a function', () => {
//       const deleteProperty = funcs.deleteProperty;
//       assert.typeOf(deleteProperty, 'function');
//     });
//     it('result should be a boolean', () => {
//       const deleteProperty = funcs.deleteProperty;
//       assert.typeOf(deleteProperty(10), 'boolean');
//     });
//     it('should return true if value is an integer', () => {
//       const deleteProperty = funcs.deleteProperty;
//       assert.equal(deleteProperty(5), true);
//     });
//     it('should return false if value is not an integer', () => {
//       const deleteProperty = funcs.deleteProperty;
//       assert.equal(deleteProperty(10.5), false);
//     });
//   });
//   describe('newUser', () => {
//     it('should be a function', () => {
//       const newUser = funcs.newUser;
//       assert.typeOf(newUser, 'function');
//     });
//     it('result should be a string', () => {
//       const newUser = funcs.newUser;
//       assert.typeOf(newUser(10), 'string');
//     });
//     it('should return buzz if value is a multiple of 5', () => {
//       const newUser = funcs.newUser;
//       assert.equal(newUser(5), 'buzz');
//     });
//     it('should return fizz if value is a multiple of 3', () => {
//       const newUser = funcs.newUser;
//       assert.equal(newUser(6), 'fizz');
//     });
//     it('should return newUser if value is a multiple of both 5 and 3', () => {
//       const newUser = funcs.newUser;
//       assert.equal(newUser(30), 'newUser');
//     });
//   });
//   describe('hasEmail', () => {
//     it('should be a function', () => {
//       const hasEmail = funcs.hasEmail;
//       assert.typeOf(hasEmail, 'function');
//     });
//     it('result should be a boolean', () => {
//       const hasEmail = funcs.hasEmail;
//       assert.typeOf(hasEmail(10), 'boolean');
//     });
//     it('should return false if value is not prime', () => {
//       const hasEmail = funcs.hasEmail;
//       assert.equal(hasEmail(6), false);
//     });
//     it('should return true if value is prime', () => {
//       const hasEmail = funcs.hasEmail;
//       assert.equal(hasEmail(31), true);
//     });
//     it('should return false if value is less than 2', () => {
//       const hasEmail = funcs.hasEmail;
//       assert.equal(hasEmail(1), false);
//       assert.equal(hasEmail(0), false);
//       assert.equal(hasEmail(-5), false);
//     });
//   });
//   describe('hasProperty', () => {
//     it('should be a function', () => {
//       const hasProperty = funcs.hasProperty;
//       assert.typeOf(hasProperty, 'function');
//     });
//     it('should return undefined if value is not an array or an empty array', () => {
//       const hasProperty = funcs.hasProperty;
//       assert.equal(hasProperty([]), undefined);
//       assert.equal(hasProperty(0), undefined);
//       assert.equal(hasProperty(''), undefined);
//       assert.equal(hasProperty(true), undefined);
//     });
//     it('should return the first index in the array', () => {
//       const hasProperty = funcs.hasProperty;
//       assert.equal(hasProperty([0, 1, 2, 3]), 0);
//     });
//   });
//   describe('verifyPassword', () => {
//     it('should be a function', () => {
//       const verifyPassword = funcs.verifyPassword;
//       assert.typeOf(verifyPassword, 'function');
//     });
//     it('should return undefined if value is not an array or an empty array', () => {
//       const verifyPassword = funcs.verifyPassword;
//       assert.equal(verifyPassword([]), undefined);
//       assert.equal(verifyPassword(0), undefined);
//       assert.equal(verifyPassword(''), undefined);
//       assert.equal(verifyPassword(true), undefined);
//     });
//     it('should return the last index in the array', () => {
//       const verifyPassword = funcs.verifyPassword;
//       assert.equal(verifyPassword([1, 2, 3]), 3);
//     });
//   });
//   describe('updatePassword', () => {
//     it('should be a function', () => {
//       const updatePassword = funcs.updatePassword;
//       assert.typeOf(updatePassword, 'function');
//     });
//     it('should return undefined if value is not an array', () => {
//       const updatePassword = funcs.updatePassword;
//       assert.equal(updatePassword(0), undefined);
//       assert.equal(updatePassword(true), undefined);
//     });
//     it('should return the length of the array', () => {
//       const updatePassword = funcs.updatePassword;
//       assert.equal(updatePassword([1, 2, 3, 4]), 4);
//       assert.equal(updatePassword([]), 0);
//     });
//   });
//   describe('addFriend', () => {
//     it('should be a function', () => {
//       const addFriend = funcs.addFriend;
//       assert.typeOf(addFriend, 'function');
//     });
//     it('should return argument if value is not an array or an empty array', () => {
//       const addFriend = funcs.addFriend;
//       assert.equal(addFriend(0), 0);
//       assert.equal(addFriend(true), true);
//       assert.deepEqual(addFriend('123'), '123');
//       assert.deepEqual(addFriend([]), []);
//     });
//     it('should return each item in the array incremented by one', () => {
//       const addFriend = funcs.addFriend;
//       assert.deepEqual(addFriend([0, 1, 2, 3]), [1, 2, 3, 4]);
//     });
//   });
//   describe('setUsersToPremium', () => {
//     it('should be a function', () => {
//       const setUsersToPremium = funcs.setUsersToPremium;
//       assert.typeOf(setUsersToPremium, 'function');
//     });
//     it('should return the second argument as the last item on the array', () => {
//       const setUsersToPremium = funcs.setUsersToPremium;
//       assert.deepEqual(setUsersToPremium([], 4), [4]);
//     });
//     it('should push to an empty array', () => {
//       const setUsersToPremium = funcs.setUsersToPremium;
//       assert.deepEqual(setUsersToPremium([], 4), [4]);
//     });
//   });
//   describe('sumUserPostLikes', () => {
//     it('should be a function', () => {
//       const sumUserPostLikes = funcs.sumUserPostLikes;
//       assert.typeOf(sumUserPostLikes, 'function');
//     });
//     it('should return the second argument as the first item on the array', () => {
//       const sumUserPostLikes = funcs.sumUserPostLikes;
//       assert.deepEqual(sumUserPostLikes([], 4), [4]);
//     });
//     it('should add to an empty array', () => {
//       const sumUserPostLikes = funcs.sumUserPostLikes;
//       assert.deepEqual(sumUserPostLikes([], 4), [4]);
//     });
//   });
//   describe('addCalculateDiscountPriceMethod', () => {
//     it('should be a function', () => {
//       const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
//       assert.typeOf(addCalculateDiscountPriceMethod, 'function');
//     });
//     it('result should be a string', () => {
//       const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
//       assert.typeOf(addCalculateDiscountPriceMethod([10, 11, 12]), 'string');
//     });
//     it('should return the expected value', () => {
//       const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
//       assert.equal(addCalculateDiscountPriceMethod(['6', '7', '8']), '6 7 8');
//     });
//     it('should return empty string if no words are passed in', () => {
//       const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
//       assert.equal(addCalculateDiscountPriceMethod([]), '');
//     });
//   });
// });

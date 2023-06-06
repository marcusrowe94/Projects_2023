const {expect} = require("chai")
const req = require("../problems/recursion");

describe('factorial', function() {
  it('should calculate the factorial of a number', function() {
    expect(factorial(0)).equal(1);
    expect(factorial(1)).equal(1);
    expect(factorial(5)).equal(120);
  });
});

describe('sum', function() {
  it('should compute the sum of an array of integers', function() {
    expect(sum([1, 2, 3, 4, 5, 6])).toEqual(21);
  });
});

describe('arraySum', function() {
  it('should sum all numbers in an array containing nested arrays', function() {
    expect(arraySum([1, [2, 3], [[4]], 5])).toEqual(15);
  });
});

describe('isEven', function() {
  it('should check if a number is even', function() {
    expect(isEven(4)).toEqual(true);
    expect(isEven(9)).toEqual(false);
  });
});

describe('sumBelow', function() {
  it('should sum all integers below a given integer', function() {
    expect(sumBelow(10)).toEqual(45);
    expect(sumBelow(7)).toEqual(21);
  });
});

describe('range', function() {
  it('should get the integers within a range (x, y)', function() {
    expect(range(2, 9)).toEqual([3, 4, 5, 6, 7, 8]);
  });
});

describe('exponent', function() {
  it('should compute the exponent of a number', function() {
    expect(exponent(4, 3)).toEqual(64);
  });
});

describe('powerOfTwo', function() {
  it('should determine if a number is a power of two', function() {
    expect(powerOfTwo(1)).toEqual(true);
    expect(powerOfTwo(16)).toEqual(true);
    expect(powerOfTwo(10)).toEqual(false);
  });
});

describe('reverse', function() {
  it('should reverse a string', function() {
    expect(reverse("marcus")).toEqual("sucram");
  });
});

describe('palindrome', function() {
  it('should determine if a string is a palindrome', function() {
    expect(palindrome('racecar')).toEqual(true);
    expect(palindrome('blue')).toEqual(false);
  });
});

describe('modulo', function() {
  it('should calculate the remainder of x divided by y without using the modulo operator', function() {
    expect(modulo(5, 2)).toEqual(1);
    expect(modulo(17, 5)).toEqual(2);
    expect(modulo(22, 6)).toEqual(4);
  });
});

describe('multiply', function() {
  it('should multiply two numbers without using the * operator or Math methods', function() {
    expect(multiply(5, 4)).toEqual(20);
    expect(multiply(6, 3)).toEqual(18);
    expect(multiply(10, 2)).toEqual(20);
  });
});

describe('divide', function() {
  it('should divide two numbers without using the / operator or Math methods', function() {
    // Write your test cases here
  });
});

describe('gcd', function() {
  it('should find the greatest common divisor of two positive numbers', function() {
    // Write your test cases here
  });
});
describe('compareStr', function() {
  it('should compare each character of two strings and return true if both are identical', function() {
    expect(compareStr('house', 'houses')).toEqual(false);
    expect(compareStr('tomato', 'tomato')).toEqual(true);
  });
});

describe('createArray', function() {
  it('should create an array where each letter occupies an index of the array', function() {
    expect(createArray('array')).toEqual(['a', 'r', 'r', 'a', 'y']);
  });
});

describe('reverseArr', function() {
  it('should reverse the order of an array', function() {
    expect(reverseArr([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('buildList', function() {
  it('should create a new array with a given value and length', function() {
    expect(buildList(0, 5)).toEqual([0, 0, 0, 0, 0]);
    expect(buildList(7, 3)).toEqual([7, 7, 7]);
  });
});

describe('fizzBuzz', function() {
  it('should return an array of the string representations of numbers from 1 to n, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"', function() {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    // Add more test cases here
  });
});

describe('countOccurrence', function() {
  it('should count the occurrence of a value in a list', function() {
    expect(countOccurrence([2, 7, 4, 4, 1, 4], 4)).toEqual(3);
    // Add more test cases here
  });
});

describe('rMap', function() {
  it('should apply a callback function to each element of an array and return a new array', function() {
    expect(rMap([1, 2, 3], timesTwo)).toEqual([2, 4, 6]);
    // Add more test cases here
  });
});

describe('countKeysInObj', function() {
  it('should count the number of times a key occurs in an object', function() {
    var obj = {
      'e': {'x': 'y'},
      't': {'r': {'e': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };
    expect(countKeysInObj(obj, 'r')).toEqual(1);
    expect(countKeysInObj(obj, 'e')).toEqual(2);
    // Add more test cases here
  });
});

describe('countValuesInObj', function() {
  it('should count the number of times a value occurs in an object', function() {
    var obj = {
      'e': {'x': 'y'},
      't': {'r': {'e': 'r'}, 'p': {'y': 'r'}},
      'y': 'e'
    };
    expect(countValuesInObj(obj, 'r')).toEqual(2);
    expect(countValuesInObj(obj, 'e')).toEqual(1);
    // Add more test cases here
  });
});

describe('replaceKeysInObj', function() {
  it('should find all keys in an object (and nested objects) by a provided name and rename them to a provided new name while preserving the value stored at that key', function() {
    var obj = {
      'a': {'b': 'c'},
      'd': {'b': 'e'},
      'f': 'b'
    };
    replaceKeysInObj(obj, 'b', 'newKey');
    expect(obj).toEqual({
      'a': {'newKey': 'c'},
      'd': {'newKey': 'e'},
      'f': 'newKey'
    });
    // Add more test cases here
  });
});

describe('fibonacci', function() {
  it('should return an array of the first n Fibonacci numbers', function() {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
    // Add more test cases here
  });
});

describe('nthFibo', function() {
  it('should return the Fibonacci number located at index n of the Fibonacci sequence', function() {
    expect(nthFibo(5)).toEqual(5);
    expect(nthFibo(7)).toEqual(13);
    expect(nthFibo(3)).toEqual(2);
    // Add more test cases here
  });
});

describe('capitalizeWords', function() {
  it('should return a new array containing each word capitalized', function() {
    var words = ['i', 'am', 'learning', 'recursion'];
    expect(capitalizeWords(words)).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
    // Add more test cases here
  });
});

describe('capitalizeFirst', function() {
  it('should capitalize the first letter of each word in an array', function() {
    expect(capitalizeFirst(['car', 'poop', 'banana'])).toEqual(['Car', 'Poop', 'Banana']);
    // Add more test cases here
  });
});

describe('nestedEvenSum', function() {
  it('should return the sum of all even numbers in an object containing nested objects', function() {
    var obj1 = {
      'a': 2,
      'b': {'b': 2, 'bb': {'b': 3, 'bb': {'b': 2}}},
      'c': {'c': {'c': 2}, 'cc': 'ball', 'ccc': 5},
      'd': 1,
      'e': {'e': {'e': 2}, 'ee': 'car'}
    };
    expect(nestedEvenSum(obj1)).toEqual(10);
    // Add more test cases here
  });
});

describe('flatten', function() {
  it('should flatten an array containing nested arrays', function() {
    expect(flatten([1, [2], [3, [[4]]], 5])).toEqual([1, 2, 3, 4, 5]);
    // Add more test cases here
  });
});

describe('letterTally', function() {
  it('should return an object containing tallies of each letter in a string', function() {
    expect(letterTally('potato')).toEqual({'p': 1, 'o': 2, 't': 2, 'a': 1});
    // Add more test cases here
  });
});

describe('compress', function() {
  it('should eliminate consecutive duplicates in a list and return a new list with only single copies of the elements', function() {
    expect(compress([1, 2, 2, 3, 4, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    // Add more test cases here
  });
});

describe('augmentElements', function() {
  it('should augment every element in a list with a new value where each element is an array itself', function() {
    expect(augmentElements([[], [3], [7]], 5)).toEqual([[5], [3, 5], [7, 5]]);
    // Add more test cases here
  });
});

describe('minimizeZeroes', function() {
  it('should reduce a series of zeroes to a single zero', function() {
    expect(minimizeZeroes([2, 0, 0, 0, 1, 4])).toEqual([2, 0, 1, 4]);
    // Add more test cases here
  });
});

describe('alternateSign', function() {
  it('should alternate the numbers in an array between positive and negative', function() {
    expect(alternateSign([2, 7, 8, 3, 1, 4])).toEqual([2, -7, 8, -3, 1, -4]);
    // Add more test cases here
  });
});

describe('numToText', function() {
  it('should convert digits to their word equivalent in a string', function() {
    expect(numToText('I have 5 dogs and 6 ponies')).toEqual('I have five dogs and six ponies');
    // Add more test cases here
  });
});

// EXTRA CREDIT

describe('tagCount', function() {
  it('should return the number of times a tag occurs in the DOM', function() {
    // Add test cases here
  });
});

describe('binarySearch', function() {
  it('should perform binary search on a sorted array and return the index of the target element', function() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(binarySearch(array, 5)).toEqual(5);
    // Add more test cases here
  });
});

describe('mergeSort', function() {
  it('should sort an array using the merge sort algorithm', function() {
    expect(mergeSort([34, 7, 23, 32, 5, 62])).toEqual([5, 7, 23, 32, 34, 62]);
    // Add more test cases here
  });
});

describe('clone', function() {
  it('should deeply clone objects and arrays', function() {
    var obj1 = { 'a': 1, 'b': { 'bb': { 'bbb': 2 } }, 'c': 3 };
    var obj2 = clone(obj1);
    expect(obj2).toEqual({ 'a': 1, 'b': { 'bb': { 'bbb': 2 } }, 'c': 3 });
    expect(obj1 === obj2).toEqual(false);
    // Add more test cases here
  });
});

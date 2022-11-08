'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // creating memoized functions from pure 'range' function
  let memoizedRange = memoize(range);

  console.log(memoizedRange(3.5, '-2'));
  console.log(memoizedRange(3.5, -2));
  console.log(memoizedRange(-2.597, '3.78'));
  console.log(memoizedRange(1, -2));
  console.log(memoizedRange(5, '6px'));

  // calculating the sum of a row of integers in a given range
  function range(min, max) {
    return (max * (max + 1) / 2 - min * (min - 1) / 2);
  }
  // function that takes another function and returning it, but with memoization
  function memoize(fn) {
    // an object storing function call data
    let cache = {};
    return (...args) => {
      console.log(`Preset numbers: ${args[0]}, ${args[1]};`);
      
      let a = validArgs(args)[0];
      let b = validArgs(args)[1];
      let min;
      let max;
      // finding max and min and discarding the fractional part of a number
      a > b ? (
        min = b | 0,
        max = a | 0
      ) : (
        min = a | 0,
        max = b | 0
      );

      console.log(`Lower limit: ${min}, upper limit: ${max};`);
      // a key to search for values in cache{} the min and max limits
      let key = [min, max].join();

      if (key in cache) {
        console.log('Fetching from cache:');
        return cache[key];
      }
      else {
        console.log('Calculating result:');
        let sum = fn(min, max);
        cache[key] = sum;
        return validSum(sum);
      }
    }
  }
  // checks the validity of the arguments
  function validArgs(args) {
    let err = {};

    if (args.length != 2) {
      err.name = 'Wrong number of arguments!';
      err.message = 'The function must take two arguments.';
      throw err;
    } else {
      for (let arg of args) {
        if (isNaN((+arg))) {
          err.name = 'This is not a number!';
          err.message = 'Pass only numbers to the function.';
          throw err;
        }
      }
      return args;
    }
  }
  // checks the validity of the sum
  function validSum(sum) {
    let err = {};

    if (sum > Number.MAX_SAFE_INTEGER) {
      err.name = 'The result exceeds the maximum safe integer valueexceeds the maximum safe integer value';
      err.message = 'There should not be such a wide range between numbers.';
      throw err;
    }
    else {
      return sum;
    }
  }
});
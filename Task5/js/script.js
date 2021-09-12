'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // creating memoized functions from validSum function
  let memoizedRange = memoize(validSum);

  console.log(memoizedRange(3, '-2')); //Calculating result from 2 to 3
  console.log(memoizedRange(3.5, -2.4)); //Fetching result from 2 to 3
  console.log(memoizedRange(-2.597, '3.78')); //Fetching result from 2 to 3

  console.log(memoizedRange(-1, '2.678986554557655673')); //Calculating result from -1 to 2
  console.log(memoizedRange(-1.67, 2.89)); //Fetching result from -1 to 2

  console.log(memoizedRange(9007199254740992, 0)); //Error: number is not a safe integer
  console.log(memoizedRange(5, '6px')); //Error: this is not a number
  console.log(memoizedRange(2)); //Error: the function must take two arguments
  console.log(memoizedRange(0, 9007199254740991)); //Error: result more or less than the maximum safe integer value
  console.log(memoizedRange(-9007199254740991, 0)); //Error: result more or less than the maximum safe integer value

  // pure function calculating the sum of a row of integers in a given range
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

      a > b ? (
        min = b,
        max = a
      ) : (
        min = a,
        max = b
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
        return sum;
      }
    }
  }
  // checks the validity of the arguments
  function validArgs(args) {
    let err = {};
    let validArgs = [];

    if (args.length != 2) {
      err.name = 'Wrong number of arguments!';
      err.message = 'The function must take two arguments.';
      throw err;
    }

    for (let arg of args) {
      if (isNaN((+arg))) {
        err.name = 'This is not a number!';
        err.message = 'Pass only numbers to the function.';
        throw err;
      }
      else if (arg > Number.MAX_SAFE_INTEGER) {
        err.name = 'Number is not a safe integer!';
        err.message = 'Precision may be lost.';
        throw err;
      } else {
        validArgs.push(Math.trunc(arg));
      }
    }
    return validArgs;
  }
  // checks the validity of the sum
  function validSum(min, max) {
    let err = {};

    if (!Number.isSafeInteger(range(min, max))) {
      err.name = 'Result more or less than the maximum safe integer value';
      err.message = 'There should not be such a wide range between numbers.';
      throw err;
    }
    else {
      return range(min, max);
    }
  }
});

'use strict';
document.addEventListener('DOMContentLoaded', () => {

  let a = {
    x: 1,
    y: 2
  };

  let b = {
    x: 1,
    y: 2
  };

  let c = {
    x: 1,
    y: 2,
    z: 2
  };

  let d = {
    x: 1,
    y: 2,
    z: 5,
    w: 3
  };

  console.log('Function that can “add” objects');
  add(a, b, c, d);
  add(a, b, d, c, a, d);
  console.log('Function that can intersect object');
  findDuplicate(a, b, c, d);

  function add(...objs) {
    let result = {};
    // creating a copy of the object with the largest number of properties 
    Object.assign(result, findLargestObj(objs));
    // all object properties are set to 0
    for (let key in result) {
      result[key] = 0;
    }
    // object properties are equal to the sum of properties of all objects with the same keys
    for (var obj of objs) {
      for (let key in obj) {
        result[key] += obj[key];
      }
    };
    console.log(result);
  }
  // function finds the object with the largest number of properties and returns it
  function findLargestObj(objs) {
    let countProp = 0;
    let largestObj = {};

    for (var obj of objs) {
      if (countProp < Object.keys(obj).length) {
        countProp = Object.keys(obj).length;
        largestObj = obj;
      }
    }
    return largestObj;
  };

  // task *
  function findDuplicate(...objs) {
    let result = [];
    let arr = arrFromProps(objs);

    for (var len = arr.length, i = len; --i >= 0;) {
      // counting the number of repeating elements
      if (arr[arr[i]]) {
        arr[arr[i]] += 1;
      } else {
        arr[arr[i]] = 1;
      }
      // if the number of repetitions == the number of objects, then this property is present in each object
      if (arr[arr[i]] == objs.length) {
        result.push(arr[i]);
      }
    }
    // transform a list of key-value pairs into an object
    console.log(Object.fromEntries(result));
  }
  // function creates an array from the properties of all objects
  function arrFromProps(objs) {
    let arr = [];
    for (var obj of objs) {
      // push to arr an array of a given object's own enumerable property [key, value] pairs
      arr.push(Object.entries(obj));
    }
    // creates a new array with all sub-array elements concatenated into it recursively up 
    return arr.flat();
  }
});
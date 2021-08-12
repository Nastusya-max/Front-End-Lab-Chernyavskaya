'use strict';
document.addEventListener('DOMContentLoaded', () => {
  createTable();
  // function for generating random numbers from a task
  function randn_bm() {
    let u = 0; 
    let v = 0;

    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();

    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
  };
  // function to create an array of 10 random numbers
  function arrRand() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push(randn_bm());
    }

    return arr.sort();
  };
  // function to create object with the keys related to the generated numbers and value 
  // as a quantity of corresponding number
  function objGauss() {
    let arr = arrRand();
    let result = {};
    // counting repetitions in an array and creating an object
    arr.forEach(function (item) {
      if (!Object.keys(result).includes(item)) {
        let count = arr.reduce((n, x) => n + (x === item), 0);
        result[item] = count;
      }
    });

    return { result, arr };
  };
  // function to create a key and value table
  function createTable() {
    objGauss = objGauss();
    // table header
    console.log(`
    Array : ${objGauss.arr}

    **********************
    |   key   |   value  |
    **********************`);
    // outputting keys and values
    for (let key in objGauss.result) {
      if (key >= 0) {
        console.log(`
    |    ${key}    |     ${objGauss.result[key]}    |`);
      } else {
        console.log(`
    |   ${key}    |     ${objGauss.result[key]}    |`);
      }
    }
    // table footer
    console.log(`
    **********************`);
  };
});
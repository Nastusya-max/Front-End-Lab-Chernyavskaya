'use strict';
document.addEventListener('DOMContentLoaded', () => {
  testPermut('ABC');
  testPermut('1234');
  testPermut('aAa');
  testPermut('AaBa');

  function testPermut(str) {
    console.log(`The entered string: ${str};`);
    console.log(`All permutations of a given string (in lexicographic order): ${permutator(str)};`);
    console.log(`Number of permutations (${str.length})!: ${permutator(str).length};`);
  }

  function permutator(str) {
    if (str.length < 2) return str;

    let permutations = [];

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);

      for (let subPermutation of permutator(remainingString)) {
        permutations.push(char + subPermutation);
      }
    }
    return permutations;
  }
});


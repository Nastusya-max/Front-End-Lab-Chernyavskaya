let arr = [1, 2, 3, 4];
console.log('One-dimensional array:\n', arr);
console.log('Approximated one-dimensional array:\n', approx(arr));


let arr2D = [[0, 2, 3], [1, 5, 6], [7, 8, 0]];
console.log('Two-dimensional array:\n', arr2D);
console.log('Approximated two-dimensional array:\n', approx2D(arr2D));

let arr3D = [
  [
    [1, 2, 0],
    [4, 0, 6],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 1, 6],
    [7, 5, 0],
  ],
  [
    [1, 2, 3],
    [0, 5, 6],
    [7, 8, 9],
  ],
];
console.log('Three-dimensional array:\n', arr3D);
console.log('Approximated three-dimensional array:\n', approx3D(arr3D));

// if an element with such an index is not found
function check(item) {
  if (!(item == undefined)) {
    return item;
  } else {
    return 0;
  }
}

function approx(arr) {
  let arrApprox = new Array();

  arr.forEach(function (item, i, arr) {
    item = check(arr[i - 1]) + check(arr[i + 1]);
    arrApprox.push(item);
  });
  return arrApprox;
}

function approx2D(arr) {
  let approx2D = new Array();

  for (let i = 0; i < arr.length; i++) {
    approx2D[i] = new Array();

    for (let j = 0; j < arr[i].length; j++) {
      approx2D[i][j] = check(check(arr[i + 1])[j]) + check(check(arr[i - 1])[j]) +
        check(check(arr[i])[j - 1]) + check(check(arr[i])[j + 1]);
    }
  }
  return approx2D;
}

function approx3D(arr) {
  let approx3D = new Array();

  for (let i = 0; i < arr.length; i++) {
    approx3D[i] = new Array();

    for (let j = 0; j < arr[i].length; j++) {
      approx3D[i][j] = new Array();

      for (let k = 0; k < arr[i][j].length; k++) {
        // approx2D[i][j][k] =  data[i][j][k]; 
        approx3D[i][j][k] = check((check(check(arr[i + 1])[j]))[k]) + check((check(check(arr[i - 1])[j]))[k]) +
          check((check(check(arr[i])[j + 1]))[k]) + check((check(check(arr[i])[j - 1]))[k]) +
          check((check(check(arr[i])[j]))[k + 1]) + check((check(check(arr[i])[j]))[k - 1]);
      }
    }
  }
  return approx3D;
}

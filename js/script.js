let a = [1, 2, 3, 4];
console.log(approx(a));

function approx(arr) {
  arrApprox = [];

  arr.forEach(function (item, i, arr) {
    switch (i) {
      case (0):
        item = arr[i + 1];
        arrApprox.push(item);
        break;
      case (arr.length - 1):
        item = arr[i - 1];
        arrApprox.push(item);
        break;
      default:
        item = arr[i - 1] + arr[i + 1];
        arrApprox.push(item);
        break;
    }
  });
  return arrApprox;
}



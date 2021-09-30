const str = '1 2 10 + 1 - 2 :'

let stack = []

const add = () => {
  let sum = 0
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i]
  }
  stack = [sum]
}

const subtract = () => {
  let dif = stack[0]
  for (let i = 1; i < stack.length; i++) {
    dif -= stack[i]
  }
  stack = [dif]
}

const multiply = () => {
  let res = 1
  for (let i = 0; i < stack.length; i++) {
    res *= stack[i]
  }
  stack = [res]
}

const divide = () => {
  let res = stack[0]
  for (let i = 1; i < stack.length; i++) {
    res /= stack[i]
  }
  stack = [res]
}

const calcOper = (oper) => {
  switch (oper) {
    case '+':
      add()
      break
    case '-':
      subtract()
      break
    case '*':
      multiply()
      break;
    case ':':
      divide()
      break
  }
}

const calculator = (str) => {
  const regNum = new RegExp(/\d/)
  const regOper = new RegExp(/[\+\-\*\:]/)

  let arr = str.split(' ')

  const calcAsync = (arr) => {
    promise = new Promise((resolve, reject) => {
      for (i = 0; i < arr.length; i++) {
        if (regNum.test(arr[i])) {
          stack.push(+arr[i])
        } else if (regOper.test(arr[i])){
          setTimeout(() => {
            resolve(arr.slice(i, arr.length));
          }, 3000);
          break;
        }
      }
    });
  
    promise.then((arr) => {
      console.log(stack)
      calcOper(arr[0]);
      console.log(stack)
      newArr = arr.slice(1, arr.length)
      calcAsync(newArr)
    });
  }

  calcAsync(arr)
}

calculator(str)

const str = '1 2 10 + 1 - 2 :'

let stack = [];

const add = () => {
  let sum = 0;
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
  }
  stack = [sum];
}

const subtract = () => {
  let dif = stack[0]
  for (let i = 1; i < stack.length; i++) {
    dif -= stack[i]
  }
  stack = [dif];
}

const multiply = () => {
  let res = 1
  for (let i = 0; i < stack.length; i++) {
    res *= stack[i]
  }
  stack = [res];
}

const divide = () => {
  let res = stack[0]
  for (let i = 1; i < stack.length; i++) {
    res /= stack[i]
  }
  stack = [res];
}

const calcOper = (oper) => {
  switch (oper) {
    case '+':
      add();
      break;
    case '-':
      subtract();
      break;
    case '*':
      multiply();
      break;
    case ':':
      divide();
      break;
  }
}

const calculator = (str) => {
  str.split(' ').map(function (item, i, arr) {
    const regNum = new RegExp(/\d/)
    const regOper = new RegExp(/[\+\-\*\:]/)
    switch (true) {
      case regNum.test(item):
        stack.push(+item)
        break
      case regOper.test(item):
        calcOper(item);
        break
    }
  })
}

calculator(str)
console.log(stack);

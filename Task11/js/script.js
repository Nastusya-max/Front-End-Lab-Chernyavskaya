const str = '1 2 10 + 1'

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

// const multiply = (arr) => {
//   let newArr = []
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum *= arr[i]
//   }
//   newArr.push(sum)
//   return newArr
// }

// const divide = (arr) => {
//   let newArr = []
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum /= arr[i]
//   }
//   newArr.push(sum)
//   return newArr
// }

const calcOper = (oper) => {
  // console.log(stack)
  switch (oper) {
    case '+':
      add();
      break;
    case '-':
      subtract();
      break;
    // case '*':
    //   add(stack);
    //   break;
    // case '*':
    //   add(stack);
    //   break;
  }

  // function add() {
  //   let newArr = []
  //   let sum = 0
  //   // console.log(newArr);
  //   for (let i = 0; i < stack.length; i++) {
  //     sum += stack[i]
  //   }
  //   console.log(newArr);
  //   return newArr.push(sum)
  // }
}

const calculator = (str) => {
  str.split(' ').map(function (item, i, arr) {
    const regNum = new RegExp(/\d/)
    const regOper = new RegExp(/[\+\-\*\\]/)
    // switch (true) {
    //   case regNum.test(item):
    //     stack.push(+item)
    //     break
    //   case regOper.test(item):

    const myPromise = new Promise((resolve, reject) => {

      // resolve(() => {
      
      if (regOper.test(item)){
        setTimeout(() => {
          console.log(item)
          resolve(item)
        }, 300);
      }else if (regNum.test(item)) {
        console.log(item)
        
      } 
      // })


    });


    myPromise
      .then(() => {

        console.log(arr)

      }
    )

  })

}

calculator(str)
// console.log(stack);
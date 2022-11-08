const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')

const str = '2 2 + 2 3 * -48 : 2 10 -' //str for example

let stack = []

const add = () => {
  let sum = 0
  for (let i = stack.length; i > 0; i--) {
    sum += stack[i - 1]
  }
  stack = [sum]
}

const subtract = () => {
  let dif = stack[stack.length - 1]
  for (let i = stack.length; i > 1; i--) {
    dif -= stack[i - 2]
  }
  stack = [dif]
}

const multiply = () => {
  let res = stack[stack.length - 1]
  for (let i = stack.length; i > 1; i--) {
    res *= stack[i - 2]
  }
  stack = [res]
}

const divide = () => {
  let res = stack[stack.length - 1]
  for (let i = stack.length; i > 1; i--) {
    res /= stack[i - 2]
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

  console.log(`Expression used for calculation: ${str}`)

  const calcAsync = (arr) => {
    promise = new Promise((resolve) => {
      for (i = 0; i < arr.length; i++) {
        if (regNum.test(arr[i])) {
          stack.push(+arr[i])
        } else if (regOper.test(arr[i])) {
          console.log(`Stack before the operation "${arr[i]}" :`)
          console.log(stack)
          setTimeout(() => {
            resolve(arr.slice(i, arr.length))
          }, 3000)
          break
        }
      }
    })

    promise
      .then((arr) => {
        calcOper(arr[0])
        console.log(`Stack after the operation "${arr[0]}" (3s):`)
        console.log(stack)
        document.querySelector(".output").innerHTML += `Result after the operation "${arr[0]}" (3s): ${stack} <br>`
        newArr = arr.slice(1, arr.length)
        calcAsync(newArr)
      })
      .catch(err => { console.log(err) })
  }

  calcAsync(arr)
}

btn.addEventListener('click', () => {
  stack = []
  calculator(inp.value)
  document.querySelector(".output").innerHTML = ''
})


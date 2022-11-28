const body = document.querySelector('body')
const input = document.querySelector('input')
const hello = document.querySelector('.hello')
const buttonLogin = document.querySelector('.login')

const checkLogin = () => {
  if (localStorage.getItem('isLogin') == 'true') {
    input.hidden = true;
    hello.innerHTML = `Hello, ${localStorage.getItem('name')}!`
    buttonLogin.innerHTML = 'Logout'
  } else {
    input.hidden = false
    input.value = ''
    hello.innerHTML = ''
    buttonLogin.innerHTML = 'Login'
  }
  body.className = localStorage.getItem('themeStyle')
}

const checkStore = () => {
  if (localStorage.length == 0) {
    localStorage.setItem('name', '')
    localStorage.setItem('isLogin', 'false')
    localStorage.setItem('themeStyle', body.className)
  }
}  

export default function loginFunc() {
  checkStore()
  buttonLogin.onclick = () => {
    switch (localStorage.getItem('isLogin')) {
      case 'true':
        localStorage.setItem('isLogin', 'false')
        localStorage.clear()
        checkStore()
        break;
      case 'false':
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('name', input.value)
        break;
    }
    checkLogin()
  }
  checkLogin()
}
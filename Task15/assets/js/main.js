const selectCategory = document.querySelector('.select-category')
const selecTitle = document.querySelector('.select-title')

const body = document.querySelector('body')
const area = document.querySelector('#area')
const hello = document.querySelector('.hello')
const buttonLogin = document.querySelector('.login')
const buttonTheme = document.querySelector('.theme-button')



window.onload = async () => {
  const getData = (await import('./getData.js')).default
  const UI = await import('./UI.js')



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
        localStorage.setItem('area', area.value)
        break;
    }
    checkLogin()
  }

  buttonTheme.onclick = function() {
    body.classList.remove(localStorage.getItem('themeStyle'));
    if(localStorage.getItem('themeStyle') == 'light-theme') {
      localStorage.setItem('themeStyle', 'dark-theme')
    } else {
      localStorage.setItem('themeStyle', 'light-theme')
    }
   
    body.classList.add(localStorage.getItem('themeStyle'));
  };

  checkLogin()

  getData('https://api.publicapis.org/categories')
    .then(category => {
      new Promise((resolve) => {
        resolve(UI.outputDropdown(category, 'category', selectCategory))
      })
        .then(UI.outputEntries(selectCategory, selecTitle))
        .catch(err => { console.log('Error:', err) })
    })
    .catch(({ message }) => console.log('Error:', message))
}

function checkLogin() {
  if (localStorage.getItem('isLogin') == 'true') {
    area.hidden = true;
    hello.innerHTML = `Hello, ${localStorage.getItem('area')}!`
    buttonLogin.innerHTML = 'Logout'
  } else {
    area.value = ''
    area.hidden = false;
    hello.innerHTML = ''
    buttonLogin.innerHTML = 'Login'
  }

  // if(localStorage.getItem('themeStyle') == 'dark-theme'){
    body.classList.add(localStorage.getItem('themeStyle'))
}


function checkStore() {
  if (localStorage.length == 0) {
    localStorage.setItem('area', '')
    localStorage.setItem('isLogin', 'false')
    localStorage.setItem('themeStyle', body.className)
  }
}
const body = document.querySelector('body')
const buttonTheme = document.querySelector('.theme-button')

export default function changeTheme() {
  buttonTheme.onclick = function() {
    body.classList.remove(localStorage.getItem('themeStyle'))
    if(localStorage.getItem('themeStyle') == 'light-theme') {
      localStorage.setItem('themeStyle', 'dark-theme')
    } else {
      localStorage.setItem('themeStyle', 'light-theme')
    }
    body.classList.add(localStorage.getItem('themeStyle'));
  };
}
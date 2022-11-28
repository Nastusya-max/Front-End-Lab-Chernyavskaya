const selectCategory = document.querySelector('.select-category')
const selecTitle = document.querySelector('.select-title')

window.onload = async () => {
  const getData = (await import('./getData.js')).default
  const UI = await import('./UI.js')

  const loginBtn = (await import('./Login.js')).default
  const changeThemeBtn = (await import('./changeTheme.js')).default
  // localStorage.clear()
  loginBtn()
  changeThemeBtn()
  
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

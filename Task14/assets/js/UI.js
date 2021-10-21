export const outputDropdown = (arr, className, selectItem) => {
  for (let i = selectItem.children.length - 1; i >= 0; --i) {
    if (selectItem.children[i].classList == className) {
      let child =  selectItem.children[i]
      child.parentNode.removeChild(child);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement('option')
    opt.classList.add(className)
    opt.textContent = arr[i]
    selectItem.appendChild(opt)
  }
}

export const outputEntries = async (firstDropdown, secondDropdown) => {
  const getData = (await import('./getData.js')).default

  // for category
  firstDropdown.onchange = function () {
    document.querySelector('.output').innerHTML = ''
    if (this.options[this.selectedIndex].classList.length !== 0) {
      let categoryName = this.options[this.selectedIndex].textContent
      getData(`https://api.publicapis.org/entries?category=${categoryName}&https=true`)
        .then(res => {
          let arrAPI = []
          res.entries.map(item => arrAPI.push(item.API))
          outputDropdown(arrAPI, 'title', secondDropdown)
        })
        .catch(({ message }) => console.log('Error:', message))
    } else {
      outputDropdown([], 'title', secondDropdown)
    }
  }

  // for title
  secondDropdown.onchange = function () {
    if (this.options[this.selectedIndex].classList.length !== 0) {
      let titleName = this.options[this.selectedIndex].textContent

      getData(`https://api.publicapis.org/entries?title=${titleName}&https=true`)
        .then(res => {
          document.querySelector('.output').innerHTML = `Count of entries: ${res.count} <br>`
          res.entries.map((item) => document.querySelector('.output').innerHTML += `description: ${item.Description}; <br>`)
        })
        .catch(({ message }) => console.log('Error:', message))
    } else {
      document.querySelector('.output').innerHTML = ''
    }
  }
}


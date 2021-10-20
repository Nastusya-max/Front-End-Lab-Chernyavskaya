import { getData } from './getData.js';
import { outputDropdown } from './outputDropdown.js';

export const outputEntries = (firstDropdown, secondDropdown) => {
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
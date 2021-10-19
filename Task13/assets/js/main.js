import { getData } from './getData.js';
import { outputDropdown } from './outputDropdown.js';
import { outputEntries } from './outputEntries.js';

const selectCategory = document.querySelector('.select-category')
const selecTitle = document.querySelector('.select-title')

window.onload = () => {
  getData('https://api.publicapis.org/categories')
    .then(category => {
      new Promise((resolve) => {
        resolve(outputDropdown(category, 'category', selectCategory))
      })
        .then(outputEntries(selectCategory, selecTitle))
        .catch(err => { console.log('Error:', err) })
    })
    .catch(({ message }) => console.log('Error:', message))
}

const select = document.querySelector(".select-category")

const getCategory = async () => {
  try {
    const res = await fetch('https://api.publicapis.org/categories')
    if (!res.ok) {
      throw new error(res.statusText)
    } else {
      return res.json()
    }
  } catch ({ message }) {
    throw new Error(message)
  }
}

const getEntries = async (str) => {
  try {
    const res = await fetch(`https://api.publicapis.org/entries?category=${str}&https=true`)
    if (!res.ok) {
      throw new error(res.statusText)
    }
    return res.json()
  } catch ({ message }) {
    throw new Error(message)
  }
}

const outputCategory = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement('option')
    opt.classList.add('category')
    opt.textContent = arr[i]
    select.appendChild(opt)
  }
}

const outputEntries = () => {
  select.onchange = function () {
    if (this.options[this.selectedIndex].classList == 'category') {
      getEntries(this.options[this.selectedIndex].textContent)
        .then(entries => {
          document.querySelector(".output").innerHTML = `Count of entries: ${entries.count} <br>`
          entries.entries.map((item, i) => document.querySelector(".output").innerHTML += `${i + 1}) API: ${item.API}; description: ${item.Description}; <br>`)
        })
        .catch(({ message }) => console.log("Error:", message))
    } else {
      document.querySelector(".output").innerHTML = ''
    }
  }
}

window.onload = () => {
  getCategory()
    .then(category => {
      promise = new Promise((resolve) => {
        resolve(outputCategory(category))
      })
        .then(outputEntries())
        .catch(err => { console.log("Error:", err) })
    })
    .catch(({ message }) => console.log("Error:", message))
}
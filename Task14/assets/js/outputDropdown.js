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
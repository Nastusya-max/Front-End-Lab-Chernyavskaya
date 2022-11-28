const selectCategory = document.querySelector(".select-category");
const selecTitle = document.querySelector(".select-title");

const getData = async (str) => {
  let data;
  try {
    const res = await fetch(str);
    if (!res.ok) {
      throw new error(res.statusText);
    }
    data = await res.json();
  } catch ({ message }) {
    throw new Error(message);
  }
  return data;
};

const outputCategory = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement("option");
    opt.classList.add("category");
    opt.textContent = arr[i];
    selectCategory.appendChild(opt);
  }
};

const outputTitle = (arr) => {
  // deleting the titles of the previous category
  for (let i = selecTitle.children.length - 1; i >= 0; --i) {
    if (selecTitle.children[i].classList == "title") {
      selecTitle.children[i].remove();
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement("option");
    opt.classList.add("title");
    opt.textContent = arr[i];
    selecTitle.appendChild(opt);
  }
};

const outputEntries = () => {
  // for category
  selectCategory.onchange = function () {
    if (this.options[this.selectedIndex].classList == "category") {
      let categoryName = this.options[this.selectedIndex].textContent;

      getData(
        `https://api.publicapis.org/entries?category=${categoryName}&https=true`
      )
        .then((res) => {
          let arrAPI = [];
          res.entries.map((item) => arrAPI.push(item.API));
          outputTitle(arrAPI);
        })
        .catch(({ message }) => console.log("Error:", message));
    } else {
      document.querySelector(".output").innerHTML = "";
    }
    // for title
    selecTitle.onchange = function () {
      if (this.options[this.selectedIndex].classList == "title") {
        let titleName = this.options[this.selectedIndex].textContent;

        getData(
          `https://api.publicapis.org/entries?title=${titleName}&https=true`
        )
          .then((res) => {
            document.querySelector(
              ".output"
            ).innerHTML = `Count of entries: ${res.count} <br>`;
            res.entries.map(
              (item) =>
                (document.querySelector(
                  ".output"
                ).innerHTML += `description: ${item.Description}; <br>`)
            );
          })
          .catch(({ message }) => console.log("Error:", message));
      } else {
        document.querySelector(".output").innerHTML = "";
      }
    };
  };
};

window.onload = () => {
  getData("https://api.publicapis.org/categories")
    .then((category) => {
      promise = new Promise((resolve) => {
        resolve(outputCategory(category));
      })
        .then(outputEntries())
        .catch((err) => {
          console.log("Error:", err);
        });
    })
    .catch(({ message }) => console.log("Error:", message));
};

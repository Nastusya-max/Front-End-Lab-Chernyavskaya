const table = document.getElementById("table");
const obj = [
  {
    id: 2,
    name: "ALex",
    age: 23,
  },
  {
    id: 3,
    name: "Kyle",
    age: 20,
  },
  {
    id: 1,
    name: "Isabel",
    age: 17,
  },
  {
    id: 7,
    name: "Ann",
    age: 12,
  },
  {
    id: 5,
    name: "Bell",
    age: 32,
  },
  {
    id: 6,
    name: "Barry",
    age: 46,
  },
];

const buildTable = (data) => {
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].name}</td>
                  <td>${data[i].age}</td>
                </tr>`;
    document.getElementById("tableData").innerHTML += row;
  }
};

const sortTable = (colNum, type) => {
  let tbody = table.querySelector("tbody");
  let rowsArray = Array.from(tbody.rows);
  let compare;

  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
};

const editCell = (td) => {
  let input = document.createElement("input");
  input.value = td.innerHTML;
  td.innerHTML = "";
  td.appendChild(input);
};

const cancelEdit = () => {
  let input = document.querySelector("input");
  if (typeof input != "undefined" && input != null) {
    td = input.parentElement;
    td.removeChild(input);
    td.innerHTML = input.value;
  }
};

document.addEventListener("click", function (e) {
  switch (e.target.tagName) {
    case "TH":
      sortTable(e.target.cellIndex, e.target.dataset.type);
      break;
    case "TD":
      editCell(e.target);
      break;
    case "BODY":
      cancelEdit();
      break;
  }
});

buildTable(obj);

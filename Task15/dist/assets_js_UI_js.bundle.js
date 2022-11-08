"use strict";
(self["webpackChunktask15_webpack"] = self["webpackChunktask15_webpack"] || []).push([["assets_js_UI_js"],{

/***/ "./assets/js/UI.js":
/*!*************************!*\
  !*** ./assets/js/UI.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "outputDropdown": function() { return /* binding */ outputDropdown; },
/* harmony export */   "outputEntries": function() { return /* binding */ outputEntries; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var outputDropdown = function outputDropdown(arr, className, selectItem) {
  for (var i = selectItem.children.length - 1; i >= 0; --i) {
    if (selectItem.children[i].classList == className) {
      var child = selectItem.children[i];
      child.parentNode.removeChild(child);
    }
  }

  for (var _i = 0; _i < arr.length; _i++) {
    var opt = document.createElement('option');
    opt.classList.add(className);
    opt.textContent = arr[_i];
    selectItem.appendChild(opt);
  }
};
var outputEntries = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(firstDropdown, secondDropdown) {
    var getData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_whatwg-fetch_fetch_js"), __webpack_require__.e("assets_js_getData_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./getData.js */ "./assets/js/getData.js"));

          case 2:
            getData = _context.sent.default;

            // for category
            firstDropdown.onchange = function () {
              document.querySelector('.output').innerHTML = '';

              if (this.options[this.selectedIndex].classList.length !== 0) {
                var categoryName = this.options[this.selectedIndex].textContent;
                getData("https://api.publicapis.org/entries?category=".concat(categoryName, "&https=true")).then(function (res) {
                  var arrAPI = [];
                  res.entries.map(function (item) {
                    return arrAPI.push(item.API);
                  });
                  outputDropdown(arrAPI, 'title', secondDropdown);
                }).catch(function (_ref2) {
                  var message = _ref2.message;
                  return console.log('Error:', message);
                });
              } else {
                outputDropdown([], 'title', secondDropdown);
              }
            }; // for title


            secondDropdown.onchange = function () {
              if (this.options[this.selectedIndex].classList.length !== 0) {
                var titleName = this.options[this.selectedIndex].textContent;
                getData("https://api.publicapis.org/entries?title=".concat(titleName, "&https=true")).then(function (res) {
                  document.querySelector('.output').innerHTML = "Count of entries: ".concat(res.count, " <br>");
                  res.entries.map(function (item) {
                    return document.querySelector('.output').innerHTML += "description: ".concat(item.Description, "; <br>");
                  });
                }).catch(function (_ref3) {
                  var message = _ref3.message;
                  return console.log('Error:', message);
                });
              } else {
                document.querySelector('.output').innerHTML = '';
              }
            };

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function outputEntries(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

}]);
"use strict";
(self["webpackChunktask15_webpack"] = self["webpackChunktask15_webpack"] || []).push([["assets_js_changeTheme_js"],{

/***/ "./assets/js/changeTheme.js":
/*!**********************************!*\
  !*** ./assets/js/changeTheme.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ changeTheme; }
/* harmony export */ });
var body = document.querySelector('body');
var buttonTheme = document.querySelector('.theme-button');
function changeTheme() {
  buttonTheme.onclick = function () {
    body.classList.remove(localStorage.getItem('themeStyle'));

    if (localStorage.getItem('themeStyle') == 'light-theme') {
      localStorage.setItem('themeStyle', 'dark-theme');
    } else {
      localStorage.setItem('themeStyle', 'light-theme');
    }

    body.classList.add(localStorage.getItem('themeStyle'));
  };
}

/***/ })

}]);
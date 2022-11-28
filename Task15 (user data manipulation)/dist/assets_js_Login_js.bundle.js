"use strict";
(self["webpackChunktask15_webpack"] = self["webpackChunktask15_webpack"] || []).push([["assets_js_Login_js"],{

/***/ "./assets/js/Login.js":
/*!****************************!*\
  !*** ./assets/js/Login.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loginFunc; }
/* harmony export */ });
var body = document.querySelector('body');
var input = document.querySelector('input');
var hello = document.querySelector('.hello');
var buttonLogin = document.querySelector('.login');

var checkLogin = function checkLogin() {
  if (localStorage.getItem('isLogin') == 'true') {
    input.hidden = true;
    hello.innerHTML = "Hello, ".concat(localStorage.getItem('name'), "!");
    buttonLogin.innerHTML = 'Logout';
  } else {
    input.hidden = false;
    input.value = '';
    hello.innerHTML = '';
    buttonLogin.innerHTML = 'Login';
  }

  body.className = localStorage.getItem('themeStyle');
};

var checkStore = function checkStore() {
  if (localStorage.length == 0) {
    localStorage.setItem('name', '');
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('themeStyle', body.className);
  }
};

function loginFunc() {
  checkStore();

  buttonLogin.onclick = function () {
    switch (localStorage.getItem('isLogin')) {
      case 'true':
        localStorage.setItem('isLogin', 'false');
        localStorage.clear();
        checkStore();
        break;

      case 'false':
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('name', input.value);
        break;
    }

    checkLogin();
  };

  checkLogin();
}

/***/ })

}]);
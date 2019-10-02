webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rosalieprom/Documents/GitHub/rosiedev/components/Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Navigation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      toggleMenu = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    "class": "bg-white fixed w-full z-30 top-0 text-black p-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    "class": "w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    "class": "flex items-center h-6 w-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "/static/alphawallet_logo.png",
    alt: "AlphaWallet",
    width: "150px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))), __jsx("div", {
    "class": "block lg:hidden pr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("button", {
    "class": "flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-blue-800 hover:border-blue-800 appearance-none focus:outline-none",
    onClick: function onClick() {
      return toggleMenu(!menuOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("svg", {
    "class": "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx("div", {
    "class": "".concat(menuOpen ? "block" : "hidden", " w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"),
    id: "nav-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("ul", {
    "class": "list-reset lg:flex justify-end flex-1 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("li", {
    "class": "mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    "class": "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Tech"))), __jsx("li", {
    "class": "mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    "class": "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "About"))), __jsx("li", {
    "class": "mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "https://medium.com/alphawallet",
    target: "_blank",
    rel: "noopener noreferrer ",
    "class": "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Blog"))), __jsx("button", {
    "class": "bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Get AlphaWallet")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.1b0abd15482ef4a06185.hot-update.js.map
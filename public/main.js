/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


// blur header
window.addEventListener('scroll', function () {
  var header = document.querySelector('.site-header');
  if (window.scrollY > 10) {
    header.classList.add('site-header--scrolled');
  } else {
    header.classList.remove('site-header--scrolled');
  }
});

// show all the products
document.addEventListener('DOMContentLoaded', function () {
  var viewAllBtn = document.getElementById('view-all-btn');
  var hiddenCards = document.querySelectorAll('.product-card-wrapper.hidden');
  viewAllBtn.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
      return card.classList.remove('hidden');
    });
    viewAllBtn.style.display = 'none';
  });
});

// product cart animation
document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.product-card');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('product-card--visible');
        observer.unobserve(entry.target); // Para animar solo una vez
      }
    });
  }, {
    threshold: 0.1
  });
  cards.forEach(function (card) {
    return observer.observe(card);
  });
  var viewAllBtn = document.getElementById('view-all-btn');
  viewAllBtn === null || viewAllBtn === void 0 || viewAllBtn.addEventListener('click', function () {
    document.querySelectorAll('.hidden').forEach(function (el) {
      return el.classList.remove('hidden');
    });
    var newCards = document.querySelectorAll('.product-card:not(.product-card--visible)');
    newCards.forEach(function (card) {
      return observer.observe(card);
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
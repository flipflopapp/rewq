/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { parseAndSync, parseAndClean } = __webpack_require__(/*! ./parse */ \"./src/parse.js\");\n\nconst UNIQUE_KEY = 'asdasdasa1-short-cuttext1232131dasdaasdsada';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let shortcutsText;\n\n    function loadEventHandlers() {\n        shortcutsText = document.getElementById(\"shortcuts-text\");\n        document.getElementById(\"save-links\").addEventListener('click', onSaveLinksClick);\n        document.getElementById(\"reset-links\").addEventListener('click', onResetLinksClick);\n    }\n\n    function onSaveLinksClick(e) {\n        const txt = shortcutsText.value;\n        localStorage.setItem(UNIQUE_KEY, txt);\n        parseAndSync(txt);\n    }\n\n    function onResetLinksClick(e) {\n        localStorage.clear();\n        window.location.reload();\n    }\n\n    function loadData() {\n        const txt = localStorage.getItem(UNIQUE_KEY).trim();\n        if (txt.length > 0) {\n            shortcutsText.value = txt;\n        }\n    }\n\n    loadEventHandlers();\n    loadData();\n});\n\n/**\n     * How to use Event Listeners:\n     * \n     * It requires 2 steps:\n     * 1) We fetch the object. We need to retrieve the object from the DOM by using a document retriever. \n     * \n     * These methods are: \n     * document.getElementById()\n     * document.querySelector() -- Similar to jQuery\n     * document.querySelectorAll()\n     * document.getElementsByClassName()\n     * document.getElementsByName()\n     * document.getElementsByTagName()\n     * document.getElementsByTagNameNS()\n     * \n     * There are more advance uses of these \"retrievers\", but let's keep it simple. \n     * \n     * 2) We attach the event listener:\n     * We need to store the retrieved element in a variable (recommended).\n     * \n     * const element = document.querySelector('button');\n     * \n     * Then we attach the event listener:\n     * element.addEventListener('click', myFunction);\n     * \n     * Whereas myFunction is the function (without parenthesis!! Otherwise it executes it!!) that\n     * you want to call. \n     * \n     * See this as the equivalent of:\n     * <button click=\"myFunction()\">My Button</button>\n     * \n     * You can see the event listener list in the panel at the left in MDN:\n     * https://developer.mozilla.org/en-US/docs/Web/API/EventListener\n     * \n     */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parse.js":
/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
/*! exports provided: parseAndSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseAndSync\", function() { return parseAndSync; });\n\nfunction parseAndSync(text) {\n  let shortcut = '';\n  let type = '';\n  let urls = [];\n  const lines = text.split('\\n');\n\n  lines.forEach(line => {\n    const action = line[0];\n    switch(action) {\n      case undefined:\n      case '-':\n      case '#': {\n        return;\n      }\n      case '+': {\n        saveAndReset();\n        const title = line.substr(1).split(' ').filter(str => str.trim() !== '');\n        shortcut = title[0].toLowerCase();\n        type = title[1].toLowerCase();\n        return;\n      }\n      default: {\n        const url_arr = line.split(' ').filter(str => str.trim() !== '');\n        if (url_arr.length === 1) {\n          urls.push({ link: url_arr[0] });\n        } else {\n          urls.push({ link: url_arr[1], name: url_arr[0] });\n        }\n        return;\n      } \n    }\n  })\n\n  saveAndReset();\n  return;\n\n  function saveAndReset() {\n    if (shortcut.length === 0 || urls.length === 0) {\n      return;\n    }\n\n    const shortcutData = JSON.stringify({\n      type,\n      urls\n    });\n    localStorage.setItem(shortcut, shortcutData);\n\n    urls = [];\n  }\n}\n\n/*\nconst text = \"\\n\\\n# Syntax,\\n\\\n# \\n\\\n# + [NAME] [list | shortcut | random | sequence]\\n\\\n# Name URL\\n\\\n# Name URL\\n\\\n# ...\\n\\\n#\\n\\\n# use +++ for new lists, shortcuts or other accessing ways\\n\\\n# use - or # for comments\\n\\\n#\\n\\\n\\n\\\n+ standup shortcut\\n\\\nurl-here\\n\\\n- [commented-url]     \\n\\\n\\n\\\n+ workout  list \\n\\\nKettlebells url-here\\n\\\nExercises url-here\\n\\\n\";\n\nparse();\n*/\n\n//# sourceURL=webpack:///./src/parse.js?");

/***/ })

/******/ });
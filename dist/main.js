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
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\n    let enableCheckboxes;\n    let linkInputs;\n    let descInputs;\n    let modeRadio;\n    let count;\n\n    function loadEventHandlers() {\n        enableCheckboxes = document.getElementsByName(\"link-enabled\");\n        linkInputs = document.getElementsByName(\"link-url\");\n        descInputs = document.getElementsByName(\"link-desc\");\n        modeRadio = document.getElementsByName(\"mode\");\n        count = enableCheckboxes.length;\n\n        const resetButtons = document.getElementsByName(\"link-reset\");\n        for(let idx = 0; idx < count; idx++) {\n            resetButtons[idx].addEventListener('click', onResetRowClick);\n            linkInputs[idx].addEventListener('blur', onURLChange);\n        }\n\n        document.getElementById(\"save-links\").addEventListener('click', onSaveLinksClick);\n        document.getElementById(\"reset-links\").addEventListener('click', onResetLinksClick);\n        document.getElementById(\"save-settings\").addEventListener('click', onSaveSettings);\n    }\n\n    function loadData() {\n        for(let idx = 0; idx < count; idx++) {\n            loadRow(idx);\n        }\n    };\n\n    function loadRow(idx) {\n        const value = localStorage.getItem('row-' + idx);\n        const valueObj = value ? JSON.parse(value) : { enabled: false, url: '', desc: '' };\n        enableCheckboxes[idx].checked = valueObj.enabled;\n        linkInputs[idx].value = valueObj.url;\n        descInputs[idx].value = valueObj.desc;\n    }\n\n    function saveData() {\n        for(let idx = 0; idx < count; idx++) {\n            saveRow(idx);\n        }\n        localStorage.setItem('count', count);\n    }\n\n    function saveRow(idx) {\n        const valueObj = {\n            enabled: enableCheckboxes[idx].checked,\n            url: linkInputs[idx].value,\n            desc: descInputs[idx].value\n        };\n        localStorage.setItem('row-' + idx, JSON.stringify(valueObj));\n    }\n\n    function getRowNum(e) {\n        return e.target.getAttribute('num');\n    }\n\n    function onResetRowClick(e) {\n        const idx = getRowNum(e);\n        localStorage.setItem('row-' + idx, undefined);\n        enableCheckboxes[idx].checked = false;\n        linkInputs[idx].value = '';\n        descInputs[idx].value = '';\n    };\n\n    function onSaveLinksClick(e) {\n        saveData();\n    }\n\n    function onResetLinksClick(e) {\n        for(let idx = 0; idx < count; idx++) {\n            localStorage.setItem('row-' + idx, undefined);\n        }\n        loadData();\n    }\n\n    function onURLChange(e) {\n        const row = getRowNum(e);\n        if (e.target.value) {\n            enableCheckboxes[row].checked = true;\n        } else {\n            enableCheckboxes[row].checked = false;\n        }\n    }\n\n    function loadSettings() {\n        const mode = localStorage.getItem(\"mode\");\n        if (mode === 'increment') {\n            modeRadio[1].checked = true;\n        } else {\n            modeRadio[0].checked = true;\n        }\n    }\n\n    function onSaveSettings(e) {\n        if (modeRadio[0].checked) {\n            localStorage.setItem('mode', modeRadio[0].value)\n        }\n        if (modeRadio[1].checked) {\n            localStorage.setItem('mode', modeRadio[1].value)\n        }\n    }\n\n    loadEventHandlers();\n    loadData();\n    loadSettings();\n});\n\n/**\n     * How to use Event Listeners:\n     * \n     * It requires 2 steps:\n     * 1) We fetch the object. We need to retrieve the object from the DOM by using a document retriever. \n     * \n     * These methods are: \n     * document.getElementById()\n     * document.querySelector() -- Similar to jQuery\n     * document.querySelectorAll()\n     * document.getElementsByClassName()\n     * document.getElementsByName()\n     * document.getElementsByTagName()\n     * document.getElementsByTagNameNS()\n     * \n     * There are more advance uses of these \"retrievers\", but let's keep it simple. \n     * \n     * 2) We attach the event listener:\n     * We need to store the retrieved element in a variable (recommended).\n     * \n     * const element = document.querySelector('button');\n     * \n     * Then we attach the event listener:\n     * element.addEventListener('click', myFunction);\n     * \n     * Whereas myFunction is the function (without parenthesis!! Otherwise it executes it!!) that\n     * you want to call. \n     * \n     * See this as the equivalent of:\n     * <button click=\"myFunction()\">My Button</button>\n     * \n     * You can see the event listener list in the panel at the left in MDN:\n     * https://developer.mozilla.org/en-US/docs/Web/API/EventListener\n     * \n     */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
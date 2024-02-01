/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Storage.js":
/*!***********************************!*\
  !*** ./src/components/Storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/components/Todo.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n\n\n\nclass Storage {\n  loadMockStorage() {\n    let tempTodo = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('walk dog');\n    let tempTodo2 = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('make lunch');\n    let newTodoList = new _TodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([tempTodo, tempTodo2]);\n    this.todos = newTodoList;\n  }\n\n  static loadStorage() {\n    let todoList = Object.assign(\n      new _TodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n      JSON.parse(localStorage.getItem('todoList'))\n    );\n    return todoList;\n  }\n\n  static saveStorage(data) {\n    localStorage.setItem('todoList', JSON.stringify(data));\n  }\n\n  getStorageTodoList() {\n    return this.todoList;\n  }\n\n  getStorageTodo(title) {\n    return this.todoList.filter((todo) => todo.title === title);\n  }\n\n  removeStorageTodo(title) {\n    this.todoList = this.todoList.filter((todo) => todo.title !== title);\n    this.saveStorage();\n  }\n\n  addTodoList(todoList) {\n    this.todoList = todoList;\n  }\n}\n\n\n//# sourceURL=webpack://toptodolist/./src/components/Storage.js?");

/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(title) {\n    this.title = title;\n    this.completed = false;\n  }\n  toggleCompleted() {\n    this.completed = !this.completed;\n  }\n\n  getCompleted() {\n    return this.completed;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(title) {\n    this.title = title;\n  }\n}\n\n\n//# sourceURL=webpack://toptodolist/./src/components/Todo.js?");

/***/ }),

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/components/Todo.js\");\n\n\nclass TodoList {\n  constructor(todoList = []) {\n    this.todoList = todoList;\n  }\n\n  todoListSize() {\n    return this.todoList.length;\n  }\n\n  addTodo(title) {\n    this.todoList.push(new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title));\n  }\n\n  getTodoList() {\n    return this.todoList;\n  }\n\n  printTodoList() {\n    this.todoList.forEach((todo) => console.log(todo));\n  }\n}\n\n\n//# sourceURL=webpack://toptodolist/./src/components/TodoList.js?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initUI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/components/Storage.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/components/Todo.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n\n\n\n\nfunction initUI() {\n  console.log('hello from ui');\n  initUIActions();\n  loadTodoListFromStorage();\n}\n\nfunction initUIActions() {\n  // init button actions\n  let addTodoBtn = document.getElementById('addTodoBtn');\n\n  // init input actions\n  let addTodoInput = document.getElementById('addTodoInput');\n\n  addTodoInput.addEventListener('keydown', checkKey);\n  addTodoBtn.addEventListener('click', swapTodoForm);\n}\n\nfunction checkKey(event) {\n  if (event.key === 'Enter') {\n    // TODO: add input to todo list\n    swapTodoForm();\n    this.value = '';\n  }\n}\n\nfunction swapTodoForm() {\n  let addTodoInput = document.getElementById('addTodoInput');\n  let addTodoBtn = document.getElementById('addTodoBtn');\n\n  addTodoBtn.classList.toggle('hidden');\n  addTodoInput.classList.toggle('hidden');\n}\n\n// interacting with Storage class\nfunction loadTodoListFromStorage() {\n  createMockTodoListFromStorage();\n  let todoList = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadStorage();\n  console.log(typeof todoList);\n  todoList.printTodoList();\n}\n\nfunction createMockTodoListFromStorage(storage) {\n  let newTodo1 = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('make lunch');\n  let newTodo2 = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('walk dog');\n  _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveStorage([newTodo1, newTodo2]);\n}\n\n\n//# sourceURL=webpack://toptodolist/./src/components/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UI.js */ \"./src/components/UI.js\");\n\n\n(0,_components_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://toptodolist/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
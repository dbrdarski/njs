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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/bin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var app = (function(){

    var once = function(fn){
        var resolve;
        return function(){
            if (resolve == null){
                resolve = fn.apply(null, arguments);
            }
            return resolve;
        }
    }

    function App(){}

    var appInstance =  new App;

    var store = function(){
        var wrapper = {};
        var modules = {};
        var getDeps = function(deps, callerName){
            return deps.map(function(dep){
                if( modules[dep].deps.indexOf(callerName) !== -1 ){
                    throw new Error("You have a circular dependency between '" + dep + "' and '" + callerName + "' module.");
                }
                return modules[dep].init();
            });
        };
        return {
          getAll : wrapper,
          getOrSet : function(nameOrObjectModule, depsOrModule, maybeModule){
            var objectModule = typeof nameOrObjectModule === 'object';
            var name = objectModule ? Object.keys(nameOrObjectModule)[0] : nameOrObjectModule;
            var instance = this;
            var module = maybeModule || depsOrModule || objectModule && nameOrObjectModule[name],
                deps = maybeModule ? depsOrModule : [];
            var resolve = once(function(){
              var newInstance = Object.create(instance);
              return module.bind(newInstance, newInstance).apply(newInstance, getDeps(deps, name));
            });
            if( module ){
              Object.defineProperty(wrapper, name, {get : resolve});
            }
            return module ? modules[name] = {
                deps : deps,
                init : resolve
            } : modules[name];
        }
      };
    };

    var __store = store();
    var __module = __store.getOrSet;
    var __modules = __store.getAll;

    var __run = function(deps, app){
        return __module.call(appInstance, 'app', deps, app).init();
    };
    var __config = function(name, dep){
        Object.defineProperty(this, name, { value : dep, writable : false });
        return this;
    }
    Object.defineProperties(App.prototype, {
        run : { value : __run, writable : false },
        module : { value : __module, writable : false },
        modules : { value : __modules, writable : false },
        config : { value : __config, writable : false },
        store : { value : store, writable : false },
    });
    return appInstance;
}());

module.exports = app;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var app = __webpack_require__(1);

console.log(app);

var a = app.module('something', function () {
	return { a: 1, b: 2 };
});

var c = app.run(['something'], function (something) {
	return something;
});

var abc = { "a": "a", "b": "b", "c": "c" };
var a = abc.a,
    b = abc.b;


app.model({ User: User, Permission: Permission });

// console.log(c, a)

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
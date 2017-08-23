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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var app = (function(){

    var once = function(fn){
        var resolve
        return function(){
            if (resolve == null){
                resolve = fn.apply(null, arguments)
            }
            return resolve
        }
    }

    function App(){}
    var __store = function(store){
        var wrapper = {}
        var getDeps = function(deps, callerName){
            return deps.map(function(dep){
                if( store[dep].deps.indexOf(callerName) !== -1 ){
                    throw new Error("You have a circular dependency between '" + dep + "' and '" + callerName + "' module.")
                }
                return store[dep].init()
            })
        }
        return function(name, depsOrModule, maybeModule){
            var instance = this

            var module = maybeModule || depsOrModule,
                deps = maybeModule ? depsOrModule : []

            return name != null
                ? module
                    ? Object.defineProperty(wrapper, name, {
                        get : ( modules[name] = {
                            deps : deps,
                            init : once(function(){ return module.bind(null, Object.create(instance)).apply(null, getDeps(deps, name)) })
                        }).init
                    }) && instance
                    : modules[name]
                : wrapper
        }
    }
    var __module = __store({})
    var __run = function(deps, app){
        return __module('', deps, app).init()
    }
    var __config = function(name, dep){
        if(this[name] != null) throw new Error(`'${name}' has already been declared for this scope.`)
        return Object.defineProperty(this, name, { value : dep, writable : false })
    }
    Object.defineProperties(App.prototype, {
        run : { value : __run, writable : false },
        module : { value : __module, writable : false },
        config : { value : __config, writable : false },
        store : { value : __store, writable : false },
    })
    return new App
}())

module.exports = app


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

  // Create an app
    const app = __webpack_require__(0)
    // const diet = require('diet')
    // const SQL = require('sequelize')

    // const crossOrigin = require('diet-cross-origin')

      console.log('asdf!!!!!')

    // const server = diet()
    // server.header(crossOrigin({
    //     defaults: {
    //         origin: '*',
    //         credentials: true
    //     }
    // }))
    //
    // server.listen('http://localhost:8000')

    // const db = new SQL('postgres', 'postgres', 'qwerty', {
    //   host: 'localhost',
    //   dialect: 'postgres',

    //   pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    //   }
    // });

    // db.authenticate()

    // var d = app.module('dane')
    // d.define('eyes', 'blue')
    // d.define('hair', 'orange')


    // app.require('dane') = {
    //   'eyes' : 'blue',
    //   'hair' : 'orange'
    // }

    // app.model => reqisters model (module alias)
    // app.models => fetch registered (require alias)

    // app.config('model', app.store({}))
    // app.config('models', app.model())

    // app.config('models', app.module('models'))
    // app.config('model', app.module('models').define)
    // app.config('controller', app.module('controllers').define)
    // app.config('routes', app.module('routes').define)

    // => app.models = app.module
    // app.models('User') == app.model.User ==> Both return the lazy module 'User' wrapped in once()
    // this will enable the follwoing sytax:
    // app.models({User, Permission})
    // require('./modules')

    // app.module()
        // server.get('/', ($)=>{
        //     $.data.message = 'Hello World!!!!'
        //     $.json()
        //   })
    // app
    //   .config('server', server)
    //   // .config('SQL', SQL)
    //   // .config('db', db)
    //   .run(['server'], function(app, $){
    //   })

      // .run(['models'], ($, models)=>{
      //   $.run()
      // })

      // .then(() => {
      //   console.log('Connection has been established successfully.');
      // })
      // .catch(err => {
      //   console.error('Unable to connect to the database:', err);
      // });


// force: true will drop the table if it already exists


/***/ })
/******/ ]);
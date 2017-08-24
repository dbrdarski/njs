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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("moduler");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roles_permissions_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_module__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lessions_module__ = __webpack_require__(15);





/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("diet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("diet-cross-origin");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules__ = __webpack_require__(1);
  // Create an app
    const app = __webpack_require__(0)
    const SQL = __webpack_require__(4)
    const diet = __webpack_require__(2)
    const crossOrigin = __webpack_require__(3)

    app.module('a', function(){})
    app.module({'b' : function(){}})
    

    const server = diet()
    server.header(crossOrigin({
      defaults: {
        origin: '*',
        credentials: true
      }
    }))

    server.listen('http://localhost:8000')

    const db = new SQL('postgres', 'postgres', 'qwerty', {
      host: 'localhost',
      dialect: 'postgres',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    })

    db.authenticate()

    app
      .config('server', server)
      .config('Q', SQL)
      .config('db', db)

    // app.module('setup', function($){

    let models = app.store();
    app.config('model', models.getOrSet);
    app.config('models', models.getAll);
    let relations = app.store();
    app.config('relation', relations.getOrSet);
    app.config('relations', relations.getAll);
    let controllers = app.store();
    app.config('controller', controllers.getOrSet);
    app.config('controllers', controllers.getAll);
    let routes = app.store();
    app.config('route', routes.getOrSet);
    app.config('routes', routes.getAll);

    app.config('chain', function(){
	    return (init) => Array.prototype.reduce.call(arguments, (acc, x) => acc && acc.then ? acc.then(x) : x(acc), init)
    })

    app.modules()
    app.run(function({server, routes}){
      routes();
      server.get('/', ($)=>{
        $.data.message = 'Hello World!!!!'
        $.data.context = this.constructor.name
        $.data.r = Object.getOwnPropertyNames(routes)
        $.data.app = app.constructor.name
        // $.data.isEqual = $ === this
        $.json()
      })
    })

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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CourseCtrl;
function CourseCtrl($){

    let { Course } = $.models    

    return {
        index : function($){
            Course.findAll().then(courses => {
                $.data.message = 'Hello World!!!!'
                $.data.courses = courses
                $.data.body = $.body
                $.json()
            })
        },
        new : function($){
            var course = Course.build($.query)
            $.data.msg = $.query
            course.save()
            $.json()
        },
        install : function($){
            Course.sync({force: true})
            $.data.msg = {installed: 'courses table'}
            $.json()
        }
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
  return db.define('course', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue : Q.UUIDV1
    },
    title : {
      type: Q.STRING
    },
    slug : {
      type: Q.STRING
    },
    slug : {
      type: Q.STRING
    },
    description : {
      type: Q.TEXT
    },
    video : {
      type: Q.STRING
    },
    image : {
      type: Q.STRING
    },
    level : Q.INTEGER,
    color : Q.INTEGER,
    active : {
      type : Q.BOOLEAN,
      defaultValue : false
    }
  })
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function({models: { User, Course, Lession }}){
  Course.belongsTo(User, {as: 'Author', foreignKey: 'AuthorId'})		// owner (lecturer)
	Course.belongsToMany(User, { through: User })	// students
  Course.hasMany(Lession)
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( { server, controllers :  { CourseCtrl }} ){
    server
        .get('/courses', CourseCtrl.index)
        .get('/course/new', CourseCtrl.new)
        .get('/course/install', CourseCtrl.install)

    // server.get('/:page', function($){
    //     $.data.msg = $.params.page
    //     $.json()
    // })
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_model__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_routes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_controller__ = __webpack_require__(6);






__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('courses', function($){
	$.model({Course: __WEBPACK_IMPORTED_MODULE_1__course_model__["a" /* default */]})
	$.relation('Course', __webpack_require__(8))
	$.controller({CourseCtrl: __WEBPACK_IMPORTED_MODULE_3__course_controller__["a" /* default */]})
	$.route({CourseRoutes: __WEBPACK_IMPORTED_MODULE_2__course_routes__["a" /* default */]})
})


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LessionCtrl;
function LessionCtrl({ models: { Lession }}){
  return {
    index : function($){
      Lession
        .findAll()
        .then(lession => {
          $.data.message = 'Hello World!!!!'
          $.data.lession = lession
          $.data.body = $.body
          $.json()
      })
    },
    new : function($){
      var lession = Lession.build($.query)
      $.data.msg = $.query
      lession.save()
      $.json()
    },
    install : function($){
      Lession.sync({force: true})
      $.data.msg = {installed: 'lession table'}
      $.json()
    }
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
  return db.define('lession', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue : Q.UUIDV1
    },
    title : {
      type: Q.STRING
    },
    slug : {
      type: Q.STRING
    },
    description : {
      type: Q.TEXT
    },
    video : {
      type: Q.STRING
    },
    image : {
      type: Q.STRING
    },
    grade : Q.INTEGER,
    complete : {
      type : Q.BOOLEAN
    }
  })
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function({models: { Lession, User, Course, LessionUser }}){
	Lession.belongsTo(Course)
  // Lession.belongsToMany(User)
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( { server, controllers : { LessionCtrl }} ){
  server
    .get('/lessions', LessionCtrl.index)
    .get('/lession/new', LessionCtrl.new)
    .get('/lession/install', LessionCtrl.install)

    // server.get('/:page', function($){
    //     $.data.msg = $.params.page
    //     $.json()
    // })
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lession_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lession_routes__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lession_controller__ = __webpack_require__(11);







__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('lessions', function($){
	$.model({Lession: __WEBPACK_IMPORTED_MODULE_1__lession_model__["a" /* default */]})
	$.relation('Lession', __webpack_require__(13))
	$.controller({LessionCtrl: __WEBPACK_IMPORTED_MODULE_3__lession_controller__["a" /* default */]})
	$.route({LessionRoutes: __WEBPACK_IMPORTED_MODULE_2__lession_routes__["a" /* default */]})
})


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roles_permissions_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_controller__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_routes__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__role_routes__ = __webpack_require__(25);










__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('admin', function($){	
	$.model({Role: __WEBPACK_IMPORTED_MODULE_1__role_model__["a" /* default */]})
	$.model({Permission: __WEBPACK_IMPORTED_MODULE_2__permission_model__["a" /* default */]})
	$.model({RolePermission: __WEBPACK_IMPORTED_MODULE_3__roles_permissions_model__["a" /* default */]})
	$.relation('Role', __webpack_require__(24))
	$.relation('Permission', __webpack_require__(19))
	$.controller({RoleCtrl: __WEBPACK_IMPORTED_MODULE_4__role_controller__["a" /* default */]})
	$.controller({PermissionCtrl: __WEBPACK_IMPORTED_MODULE_5__permission_controller__["a" /* default */]})
	$.route({RoleRoutes: __WEBPACK_IMPORTED_MODULE_7__role_routes__["a" /* default */]})
	$.route({PermissionRoutes: __WEBPACK_IMPORTED_MODULE_6__permission_routes__["a" /* default */]})
	// console.log('ROUTES', $.routes.PermissionRoutes)
})


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PermissionCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__permission_seed__ = __webpack_require__(21);

function PermissionCtrl({
    models: { Permission }  
  }){
  // relations.Permission
  return {
    index : function($){
      Permission
        .findAll()
        .then(permissions => {
          $.data.message = 'Hello World!!!!'
          $.data.permissions = permissions
          $.json()
      })
    },
    new : function($){
      $.data.msg = $.query
      var permission = Permission.build($.query)
      permission.save()
      $.json()
    },
    install : function($){
      Permission.sync({force: true}).then(()=>{
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__permission_seed__["a" /* default */])(Permission)
        $.data.msg = {installed: 'permissions table'}
        $.json()
      })
    }
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
	return db.define('permission', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    name : {
      type: Q.STRING,
      unique: true
    },
    description : {
      type: Q.STRING
    }
  })
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function({models: { Role, Permission, RolePermission }}){
	Permission.Role = Permission.belongsToMany(Role, { through: RolePermission })
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({ server, controllers : {PermissionCtrl}}){
  server
    .get('/permissions', PermissionCtrl.index)
    .get('/permission/new', PermissionCtrl.new)
    .get('/permission/install', PermissionCtrl.install)
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( Permission ){
	Permission.create({
		name : 'manageUsers',
		description : 'Manage Users'
	})
	Permission.create({
		name : 'manageCourses',
		description : 'Manage Courses'
	})
	Permission.create({
		name : 'listenCourses',
		description : 'Listen Courses'
	})
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RoleCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_seed__ = __webpack_require__(26);

function RoleCtrl({
    models: { Role },
    relations : { RoleRel }
  }){
  return {
    index : function($){
      Role
        .findAll()
        .then(roles => {
          $.data.message = 'Hello World!!!!'
          $.data.roles = roles
          $.json()
      })
    },
    new : function($){
      $.data.msg = $.query
      let role = Role.build($.query)
      role.save()
      $.json()
    },
    install : function($){
      Role.sync({force: true}).then(()=>{
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__role_seed__["a" /* default */])(Role)
        $.data.msg = {installed: 'roles table'}
        $.json()
      })

    }
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
  return  db.define('role', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1,      
    },
    name : {
      type: Q.STRING,
      unique: true
    },
    description : {
      type: Q.STRING
    }
  })
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function({models: { Role, User, Permission, RolePermission }}){
	Role.Permission = Role.belongsToMany(Permission, { through: RolePermission })
	Role.User = Role.hasMany(User)
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({ server, controllers : { RoleCtrl }}){
  server
    .get('/roles', RoleCtrl.index)
    .get('/role/new', RoleCtrl.new)
    .get('/role/install', RoleCtrl.install)
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( Role ){
	// Role.create({
	// 	name : 'admin',
	// 	description : 'Administrator'
	// })
	// Role.create({
	// 	name : 'lecturer',
	// 	description : 'Lecturer'
	// })
	// Role.create({
	// 	name : 'student',
	// 	description : 'Student'
	// })
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
  return db.define('role-permission', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    // },
    // roleId : {
    //   type: Q.UUID,
    //   allowNull: false
    // },
    // permissionId : {
    //   type: Q.UUID,
    //   allowNull: false
    }
  })
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routes__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_controller__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_relations__ = __webpack_require__(31);







__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('users', function($){
	$.model({User: __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */]})
	$.relation({User:__WEBPACK_IMPORTED_MODULE_4__user_relations__["a" /* default */]})
	$.controller({UserCtrl: __WEBPACK_IMPORTED_MODULE_3__user_controller__["a" /* default */]})
	$.route({UserRoutes: __WEBPACK_IMPORTED_MODULE_2__user_routes__["a" /* default */]})
})


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_seed__ = __webpack_require__(33);

function UserCtrl($$){
  this.relations.User
  let User = this.models.User

  return {
    index : function($){
      User
        .findAll()
        .then(users => {
          $.data.message = 'Hello World!!!!'
          $.data.users = users
          $.data.body = $.body
          $.json()
        })

    },
    new : function($){
      var user = User.build($.query)
      $.data.msg = $.query
      user.save()
      $.json()
    },
    install : function($){
      User.sync({force: true}).then(()=>{
        $.data.msg = {installed: 'users table'}
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__user_seed__["a" /* default */])($$)
        $.json()
      })
    }
  }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({Q, db}){
  return db.define('user', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    username : {
      type: Q.STRING,
      unique: true
    },
    email : {
      type: Q.STRING,
      unique: true
    },
    password : {
      type: Q.STRING.BINARY
    },
    firstName : {
      type: Q.STRING
    },
    lastName : {
      type: Q.STRING
    },
    image : {
      type: Q.STRING
    },
    description : {
      type: Q.TEXT
    },
    state : {
      type : Q.INTEGER,
      defaultValue : 0
    }
  // }, {
  //   defaultScope: {
  //     where: {
  //       state: 1
  //     }
  //   }
  })
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({
  models: { User, Course, Role }
}){
  User.Courses = User.hasMany(Course)
  User.Role = User.belongsTo(Role, {
    as: "role"    
  })
  return true
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function({
    server,
    controllers : { UserCtrl }
  }){
  server
    .get('/users', UserCtrl.index)
    .get('/user/new', UserCtrl.new)
    .get('/user/install', UserCtrl.install)
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( $ ){
  let { User, Role } = $.models;

  $.chain(
    ( ) => (Role.build({
  		name : 'admin',
  		description : 'Administrator'
  	}).save()),
    (administrator) => {
      var admin = new User();
      admin.setRole(administrator, {save: false})
      admin.username = 'admin'
      admin.email = 'admin@course.plus'
      admin.firstName = 'Dane'
      admin.lastName = 'Brdarski'
      admin.password = 'qwertybanana'
      admin.image = 'dane.jpg'
      admin.description = 'All-seeing, All-knowing. The Admin.'
      admin.save()
  	}
  )()
  $.chain(
    () => (Role.build({
  		name : 'student',
  		description : 'Student'
  	}).save()),
    (student) => {
      let pepe = new User()
      pepe.setRole(student, {save: false})
      pepe.username = 'student'
      pepe.email = 'student@course.plus'
      pepe.firstName = 'Pepe'
      pepe.lastName = 'Biserov'
      pepe.password = 'qwertybanana'
      pepe.save()
    }
  )()
  Role.create({
    name : 'lecturer',
    description : 'Lecturer'
  })
  // pepe.setRole(student)


  // .then((admin)=>{
  //   console.log([admin])
  //   console.log(['SetRooooooooooooooooooooleeeeeeeeeeeeeeeee', admin.setRole, admin.setRoles])
  //   admin.setRole(administrator)
  // })
  // admin.setRole(administrator)
  // admin.save()

  // let pepe = User.create({
  //   username : 'student',
  //   email : 'student@course.plus',
  //   firstName : 'Pepe',
  //   lastName : 'Biserov',
  //   password : 'qwertybanana'
	// })

  // pepe.setRole(student)
  // pepe.save()
});


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map
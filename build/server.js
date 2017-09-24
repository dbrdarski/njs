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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("moduler");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = typeof setImmediate === "function" ? setImmediate : setTimeout


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURL(url, root) {
	var data = {}
	var protocolIndex = url.indexOf("://")
	var pathnameIndex = protocolIndex > -1 ? url.indexOf("/", protocolIndex + 3) : url.indexOf("/")
	var searchIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	if ((pathnameIndex > searchIndex && searchIndex > -1) || (pathnameIndex > hashIndex && hashIndex > -1)) pathnameIndex = -1
	if (searchIndex > hashIndex && hashIndex > -1) searchIndex = -1
	var pathnameEnd = searchIndex > -1 ? searchIndex : hashIndex > -1 ? hashIndex : url.length
	if (protocolIndex > -1) {
		//it's a full URL
		if (pathnameIndex < 0) pathnameIndex = url.length
		var portIndex = url.indexOf(":", protocolIndex + 1)
		if (portIndex < 0) portIndex = pathnameIndex
		data.protocol = url.slice(0, protocolIndex + 1)
		data.hostname = url.slice(protocolIndex + 3, portIndex)
		data.port = url.slice(portIndex + 1, pathnameIndex)
		data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
	}
	else {
		data.protocol = root.protocol
		data.hostname = root.hostname
		data.port = root.port
		if (pathnameIndex === 0) {
			//it's an absolute path
			data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
		}
		else if (searchIndex !== 0 && hashIndex !== 0) {
			//it's a relative path
			var slashIndex = root.pathname.lastIndexOf("/")
			var path = slashIndex > -1 ? root.pathname.slice(0, slashIndex + 1) : "./"
			var normalized = url.slice(0, pathnameEnd).replace(/^\.$/, root.pathname.slice(slashIndex + 1)).replace(/^\.\//, "")
			var dotdot = /\/[^\/]+?\/\.{2}/g
			var pathname = path + normalized
			pathname = path + normalized
			while (dotdot.test(pathname)) pathname = pathname.replace(dotdot, "")
			pathname = pathname.replace(/\/\.\//g, "/").replace(/^(\/\.{2})+/, "") || "/"
			data.pathname = pathname
		}
	}
	var searchEnd = hashIndex > -1 ? hashIndex : url.length
	data.search = searchIndex > -1 ? url.slice(searchIndex, searchEnd) : ""
	data.hash = hashIndex > -1 ? url.slice(hashIndex) : ""
	return data
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__roles_permissions_module__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lessions_module__ = __webpack_require__(21);





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topbar_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_item_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_template__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_edit_template__ = __webpack_require__(39);








__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('templates', function ($) {
  $.component({ Topbar: __WEBPACK_IMPORTED_MODULE_1__topbar_component__["a" /* default */] });
  $.component({ Content: __WEBPACK_IMPORTED_MODULE_3__content_component__["a" /* default */] });
  $.component({ CourseItem: __WEBPACK_IMPORTED_MODULE_2__course_item_component__["a" /* default */] });
  $.component({ CoursesIndex: __WEBPACK_IMPORTED_MODULE_4__courses_template__["a" /* default */] });
  $.component({ CourseEdit: __WEBPACK_IMPORTED_MODULE_5__course_edit_template__["a" /* default */] });
  $.route({ '/courses': __WEBPACK_IMPORTED_MODULE_4__courses_template__["a" /* default */] });
  $.route({ '/course/:slug': __WEBPACK_IMPORTED_MODULE_5__course_edit_template__["a" /* default */] });
  $.route({ '/course/new': __WEBPACK_IMPORTED_MODULE_5__course_edit_template__["a" /* default */] });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pushStateMock = __webpack_require__(47)
var domMock = __webpack_require__(46)
var xhrMock = __webpack_require__(48)

module.exports = function(env) {
	env = env || {}
	var $window = env.window = {}

	var dom = domMock()
	var xhr = xhrMock()
	for (var key in dom) if (!$window[key]) $window[key] = dom[key]
	for (var key in xhr) if (!$window[key]) $window[key] = xhr[key]
	pushStateMock(env)

	return $window
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("diet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("diet-cross-origin");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("diet-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mithril");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mithril-node-render");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CourseCtrl;
function CourseCtrl({
  models: { Course }
}) {
  // let { Course } = $.models
  this.relations.Course;
  return {
    index: function () {
      return Course.findAll({
        include: Course.Author
      });
    },
    edit: function ($) {
      return Course.findOne({
        where: {
          slug: $.params.slug
        },
        include: [Course.Author]
      });
    },
    new: function ($) {
      var course = Course.build($.query);
      $.data.msg = $.query;
      course.save();
      $.json();
    },
    install: function ($) {
      Course.sync({ force: true });
      $.data.msg = { installed: 'courses table' };
      $.json();
    }
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('course', {
    id: {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    title: {
      type: Q.STRING
    },
    slug: {
      type: Q.STRING
    },
    description: {
      type: Q.TEXT
    },
    video: {
      type: Q.STRING
    },
    image: {
      type: Q.STRING
    },
    color: {
      type: Q.ENUM,
      values: ['default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue'],
      defaultValue: 'default'
    },
    level: {
      type: Q.ENUM,
      values: ['Beginner', 'Intermediate', 'Advanced'],
      defaultValue: 'Beginner'
    },
    active: {
      type: Q.BOOLEAN,
      defaultValue: false
    }
  });
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ models: { User, Course, Lession } }) {
  Course.Author = Course.belongsTo(User, { as: 'author' }); // owner (lecturer)
  // Course.Student = Course.belongsToMany(User, { through: User })	// students
  Course.Lession = Course.hasMany(Lession);
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_relations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_controller__ = __webpack_require__(14);





// import CourseRoutes from './course.routes'


__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('courses', function ($) {
	$.model({ Course: __WEBPACK_IMPORTED_MODULE_1__course_model__["a" /* default */] });
	$.relation({ Course: __WEBPACK_IMPORTED_MODULE_2__course_relations__["a" /* default */] });
	$.controller({ CourseCtrl: __WEBPACK_IMPORTED_MODULE_3__course_controller__["a" /* default */] });
	// $.route({CourseRoutes}) 			// => this should be removed
	// instead, user code snipped below
	$.resolver('courses', function ({
		attach,
		server,
		controllers: { CourseCtrl }
	}) {
		attach('/courses', CourseCtrl.index);
		attach('/course/:slug', CourseCtrl.edit);
		server.get('/course/new', CourseCtrl.new).get('/course/install', CourseCtrl.install);
	});
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LessionCtrl;
function LessionCtrl({ models: { Lession } }) {
  this.relations.Lession;
  return {
    index: function ($) {
      Lession.findAll().then(lession => {
        $.data.message = 'Hello World!!!!';
        $.data.lession = lession;
        $.data.body = $.body;
        $.json();
      });
    },
    new: function ($) {
      var lession = Lession.build($.query);
      $.data.msg = $.query;
      lession.save();
      $.json();
    },
    install: function ($) {
      Lession.sync({ force: true });
      $.data.msg = { installed: 'lession table' };
      $.json();
    }
  };
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('lession', {
    id: {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    title: {
      type: Q.STRING
    },
    slug: {
      type: Q.STRING
    },
    description: {
      type: Q.TEXT
    },
    video: {
      type: Q.STRING
    },
    image: {
      type: Q.STRING
    },
    grade: Q.INTEGER,
    complete: {
      type: Q.BOOLEAN
    }
  });
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ models: { Lession, User, Course, LessionUser } }) {
  Lession.belongsTo(Course);
  // Lession.belongsToMany(User)
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lession_model__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lession_relations__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lession_controller__ = __webpack_require__(18);





// import LessionRoutes from './lession.routes'

__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('lessions', function ($) {
	$.model({ Lession: __WEBPACK_IMPORTED_MODULE_1__lession_model__["a" /* default */] });
	$.relation({ Lession: __WEBPACK_IMPORTED_MODULE_2__lession_relations__["a" /* default */] });
	$.controller({ LessionCtrl: __WEBPACK_IMPORTED_MODULE_3__lession_controller__["a" /* default */] });
	// $.route({LessionRoutes})
	$.resolver({ lessions: function ({
			server,
			controllers: { LessionCtrl }
		}) {
			server.get('/lessions', LessionCtrl.index).get('/lession/new', LessionCtrl.new).get('/lession/install', LessionCtrl.install);
		}
	});
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_model__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_model__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roles_permissions_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_controller__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_controller__ = __webpack_require__(23);







// import PermissionRoutes from './permission.routes'
// import RoleRoutes from './role.routes'

__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('admin', function ($) {
	$.model({ Role: __WEBPACK_IMPORTED_MODULE_1__role_model__["a" /* default */] });
	$.model({ Permission: __WEBPACK_IMPORTED_MODULE_2__permission_model__["a" /* default */] });
	$.model({ RolePermission: __WEBPACK_IMPORTED_MODULE_3__roles_permissions_model__["a" /* default */] });
	$.relation('Role', __webpack_require__(29));
	$.relation('Permission', __webpack_require__(25));
	$.controller({ RoleCtrl: __WEBPACK_IMPORTED_MODULE_4__role_controller__["a" /* default */] });
	$.controller({ PermissionCtrl: __WEBPACK_IMPORTED_MODULE_5__permission_controller__["a" /* default */] });
	// $.route({RoleRoutes})
	// $.route({PermissionRoutes})
	$.resolver({ 'roles-and-permissions': function ({
			server,
			controllers: { PermissionCtrl, RoleCtrl }
		}) {
			server.get('/permissions', PermissionCtrl.index).get('/permission/new', PermissionCtrl.new).get('/permission/install', PermissionCtrl.install).get('/roles', RoleCtrl.index).get('/role/new', RoleCtrl.new).get('/role/install', RoleCtrl.install);
		}
	});
	// console.log('ROUTES', $.routes.PermissionRoutes)
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PermissionCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__permission_seed__ = __webpack_require__(26);

function PermissionCtrl({
  models: { Permission }
}) {
  // relations.Permission
  return {
    index: function ($) {
      Permission.findAll().then(permissions => {
        $.data.message = 'Hello World!!!!';
        $.data.permissions = permissions;
        $.json();
      });
    },
    new: function ($) {
      $.data.msg = $.query;
      var permission = Permission.build($.query);
      permission.save();
      $.json();
    },
    install: function ($) {
      Permission.sync({ force: true }).then(() => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__permission_seed__["a" /* default */])(Permission);
        $.data.msg = { installed: 'permissions table' };
        $.json();
      });
    }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('permission', {
    id: {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    name: {
      type: Q.STRING,
      unique: true
    },
    description: {
      type: Q.STRING
    }
  });
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function ({ models: { Role, Permission, RolePermission } }) {
	Permission.Role = Permission.belongsToMany(Role, { through: RolePermission });
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Permission) {
	Permission.create({
		name: 'manageUsers',
		description: 'Manage Users'
	});
	Permission.create({
		name: 'manageCourses',
		description: 'Manage Courses'
	});
	Permission.create({
		name: 'listenCourses',
		description: 'Listen Courses'
	});
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RoleCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_seed__ = __webpack_require__(30);

function RoleCtrl({
  models: { Role },
  relations: { RoleRel }
}) {
  return {
    index: function ($) {
      Role.findAll().then(roles => {
        $.data.message = 'Hello World!!!!';
        $.data.roles = roles;
        $.json();
      });
    },
    new: function ($) {
      $.data.msg = $.query;
      let role = Role.build($.query);
      role.save();
      $.json();
    },
    install: function ($) {
      Role.sync({ force: true }).then(() => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__role_seed__["a" /* default */])(Role);
        $.data.msg = { installed: 'roles table' };
        $.json();
      });
    }
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('role', {
    id: {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    name: {
      type: Q.STRING,
      unique: true
    },
    description: {
      type: Q.STRING
    }
  });
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function ({ models: { Role, User, Permission, RolePermission } }) {
	Role.Permission = Role.belongsToMany(Permission, { through: RolePermission });
	Role.User = Role.hasMany(User);
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Role) {
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('role-permission', {
    id: {
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
  });
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moduler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_relations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_controller__ = __webpack_require__(33);





// import UserRoutes from './user.routes'

__WEBPACK_IMPORTED_MODULE_0_moduler___default.a.module('users', function ($) {
	$.model({ User: __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* default */] });
	$.relation({ User: __WEBPACK_IMPORTED_MODULE_2__user_relations__["a" /* default */] });
	$.controller({ UserCtrl: __WEBPACK_IMPORTED_MODULE_3__user_controller__["a" /* default */] });
	// $.route({UserRoutes})

	$.resolver({ 'users': function ({
			server,
			controllers: { UserCtrl }
		}) {
			server.get('/users', UserCtrl.index).get('/user/new', UserCtrl.new).get('/user/install', UserCtrl.install);
		}
	});
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserCtrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_seed__ = __webpack_require__(36);

function UserCtrl($$) {
  this.relations.User;
  let User = this.models.User;

  return {
    index: function ($) {
      User.findAll().then(users => {
        $.data.message = 'Hello World!!!!';
        $.data.users = users;
        $.data.body = $.body;
        $.json();
      });
    },
    new: function ($) {
      var user = User.build($.query);
      $.data.msg = $.query;
      user.save();
      $.json();
    },
    install: function ($) {
      User.sync({ force: true }).then(() => {
        $.data.msg = { installed: 'users table' };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__user_seed__["a" /* default */])($$);
        $.json();
      });
    }
  };
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ Q, db }) {
  return db.define('user', {
    id: {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    username: {
      type: Q.STRING,
      unique: true
    },
    email: {
      type: Q.STRING,
      unique: true
    },
    password: {
      type: Q.STRING.BINARY
    },
    firstName: {
      type: Q.STRING
    },
    lastName: {
      type: Q.STRING
    },
    image: {
      type: Q.STRING
    },
    description: {
      type: Q.TEXT
    },
    state: {
      type: Q.INTEGER,
      defaultValue: 0
      // }, {
      //   defaultScope: {
      //     where: {
      //       state: 1
      //     }
      //   }
    } });
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({
  models: { User, Course, Role }
}) {
  User.Courses = User.hasMany(Course, {
    as: 'author'
  });
  User.Role = User.belongsTo(Role, {
    as: "role"
  });
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ($) {
  let { User, Role, Course } = $.models;

  $.chain(() => Role.build({
    name: 'admin',
    description: 'Administrator'
  }).save(), administrator => {
    var admin = new User();
    admin.setRole(administrator, { save: false });
    admin.username = 'admin';
    admin.email = 'admin@course.plus';
    admin.firstName = 'Dane';
    admin.lastName = 'Brdarski';
    admin.password = 'qwertybanana';
    admin.image = 'dane.jpg';
    admin.description = 'All-seeing, All-knowing. The Admin.';
    admin.save();
  })();
  $.chain(() => Role.build({
    name: 'student',
    description: 'Student'
  }).save(), student => {
    let pepe = new User();
    pepe.setRole(student, { save: false });
    pepe.username = 'student';
    pepe.email = 'student@course.plus';
    pepe.firstName = 'Pepe';
    pepe.lastName = 'Biserov';
    pepe.password = 'qwertybanana';
    pepe.save();
  })();
  $.chain(() => Role.build({
    name: 'lecturer',
    description: 'Lecturer'
  }).save(), lecturer => {
    let dane = new User();
    dane.setRole(lecturer, { save: false });
    dane.username = 'dane';
    dane.email = 'dane@course.plus';
    dane.firstName = 'Dane';
    dane.lastName = 'Brdarski';
    dane.password = 'qwertybanana';
    dane.image = 'dane.jpg';
    dane.description = 'Dane is a front end developer at Schilling and the author of this awesome app. His expertese ranges from design, HTML, CSS, JavaScript, Angular and more recently some PHP.';
    dane.save();

    let alex = new User();
    alex.setRole(lecturer, { save: false });
    alex.username = 'alex';
    alex.email = 'alex@course.plus';
    alex.firstName = 'Alex';
    alex.lastName = 'Pffeipher';
    alex.password = 'qwertybanana';
    alex.image = 'alex.jpg';
    alex.description = 'Alex is the Founder & CEO of Wayward Wild, a media incubator and content studio helping young websites, podcasts, web series, and publications stay true to their DNA.';
    alex.save().then(alex => {
      let laravel = new Course();
      laravel.setAuthor(alex, { save: false });
      laravel.title = 'Laravel 101', laravel.slug = 'laravel-101', laravel.description = 'Dive into the Laravel essentials with this laravel by one of the core contributors.', laravel.level = 'Beginner', laravel.color = 'red', laravel.image = 'laravel.png', laravel.video = 'lnf1GdNxDbc';
      laravel.save();
      let lara401 = new Course();
      lara401.setAuthor(alex, { save: false });
      lara401.title = 'Laravel 401';
      lara401.slug = 'laravel-401';
      lara401.description = 'Dive into the Laravel essentials with this course by one of the core contributors.';
      lara401.level = 'Intermediate';
      lara401.color = 'orange';
      lara401.image = 'grunt.png';
      lara401.save();
    });

    let kirby = new User();
    kirby.setRole(lecturer, { save: false });
    kirby.username = 'kirby';
    kirby.email = 'kirby@course.plus';
    kirby.firstName = 'Kirby';
    kirby.lastName = 'Jones';
    kirby.password = 'qwertybanana';
    kirby.image = 'kirby.jpg';
    kirby.description = 'Kirby Jones is a San Francisco based fine artist whose projects have received international attention. The 1000 Journals Project, launched in 2000, has been exhibited at the San Francisco Museum of Modern Art and the Skirball Cultural Center in Los Angeles.';
    kirby.save().then(kirby => {
      let sass = new Course();
      sass.setAuthor(kirby, { save: false });
      sass.title = 'SaSS is awesome!';
      sass.slug = 'sass-is-awesome';
      sass.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.';
      sass.level = 'Intermediate';
      sass.color = 'violet';
      sass.image = 'sass.png';
      sass.save();
      let zurb = new Course();
      zurb.setAuthor(kirby, { save: false });
      zurb.title = 'ZURB Foudation Fundamentals';
      zurb.slug = 'zurb-foudation-fundamentals';
      zurb.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.';
      zurb.level = 'Beginner';
      zurb.color = 'cyan';
      zurb.image = 'zurb.png';
      zurb.save();
    });

    let larry = new User();
    larry.setRole(lecturer, { save: false });
    larry.username = 'larry';
    larry.email = 'larry@course.plus';
    larry.firstName = 'Kirby';
    larry.lastName = 'Jones';
    larry.password = 'qwertybanana';
    larry.image = 'larry.jpg';
    larry.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.';
    larry.save().then(() => {
      let ng = new Course();
      ng.setAuthor(jack, { save: false });
      ng.title = 'Angular Pet Shop';
      ng.slug = 'angular-pet-shop';
      ng.description = 'Build your first Angular app. Dive into the most popular application framework developed by Google.';
      ng.level = 'Advanced';
      ng.color = 'orange';
      ng.image = 'angular.png';
      ng.save();
      let ng2 = new Course();
      ng2.setAuthor(jack, { save: false });
      ng2.title = 'Advanced Angular Directives';
      ng2.slug = 'advanced-angular-directives';
      ng2.description = 'This course will teach you everything you need to know about directives in Angular.';
      ng2.level = 'Advanced';
      ng2.color = 'yellow';
      ng2.image = 'angular.png';
      ng2.save();
    });

    let jack = new User();
    jack.setRole(lecturer, { save: false });
    jack.username = 'jack';
    jack.email = 'jack@course.plus';
    jack.firstName = 'Kirby';
    jack.lastName = 'Jones';
    jack.password = 'qwertybanana';
    jack.image = 'jack.jpg';
    jack.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.';
    jack.save().then(jack => {
      let laravel = new Course();
      laravel.setAuthor(jack, { save: false });
      laravel.title = 'Laravel Database Essentials';
      laravel.slug = 'laravel-database-essentials';
      laravel.description = 'Learn how take advantage of Laravel\'s built in model classes, schema builder and migration manager.';
      laravel.level = 'Intermediate';
      laravel.color = 'yellow';
      laravel.image = 'database.png';
      laravel.save();
      let temps = new Course();
      temps.setAuthor(jack, { save: false });
      temps.title = 'Laravel Templates';
      temps.slug = 'laravel-templates';
      temps.description = 'Laravel templating done right. Authored by the godfather of Laravel\'s own Blade templating engine.';
      temps.level = 'Intermediate';
      temps.color = 'violet';
      temps.image = 'laravel.png';
      temps.save();
    });
  })();
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_module__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(3);
function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

// Create an app
const app = __webpack_require__(0);
const SQL = __webpack_require__(13);
const diet = __webpack_require__(6);
__webpack_require__(5)(global);
const m = __webpack_require__(10);
const render = __webpack_require__(11);
const crossOrigin = __webpack_require__(7);
const dietStatic = __webpack_require__(8);
const r = __webpack_require__(12);

var fs = __webpack_require__(9);
// app.module('a', function(){})
// app.module({'b' : function(){}})

const baseTemplate = fs.readFileSync('./bin/index.html', 'utf8');




const server = diet();
server.header(crossOrigin({
  defaults: {
    origin: '*',
    credentials: true
  }
}));

const staticFiles = dietStatic({ path: server.path + '/../bin' });
// console.log('SERVER PATH', server.path)
server.listen('http://localhost:8000');
server.footer(staticFiles);

const db = new SQL('postgres', 'postgres', 'qwerty', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.authenticate();

app.config('server', server).config('Q', SQL).config('db', db).config('_', r);

// app.module('setup', function($){

app.config('m', m);
app.config('baseTemplate', baseTemplate);

app.config('slugify', function (st) {
  st = st.toLowerCase();
  st = st.replace(/[\u00C0-\u00C5]/ig, 'a');
  st = st.replace(/[\u00C8-\u00CB]/ig, 'e');
  st = st.replace(/[\u00CC-\u00CF]/ig, 'i');
  st = st.replace(/[\u00D2-\u00D6]/ig, 'o');
  st = st.replace(/[\u00D9-\u00DC]/ig, 'u');
  st = st.replace(/[\u00D1]/ig, 'n');
  st = st.replace(/[\-]/g, ' ');
  // st = st.replace(/[^a-z0-9 ]+/gi,'')
  st = st.trim().replace(/ /g, '-');
  st = st.replace(/[\-]{2,}/g, '-');
  st = st.replace(/^[^a-z]+/g, '');
  return st.replace(/[^a-z0-9\- ]*/gi, '');
});

let components = app.store();
app.config('component', components.getOrSet);
app.config('components', components.getAll);

let models = app.store();
app.config('model', models.getOrSet);
app.config('models', models.getAll);
let relations = app.store();
app.config('relation', relations.getOrSet);
app.config('relations', relations.getAll);
let controllers = app.store();
app.config('controller', controllers.getOrSet);
app.config('controllers', controllers.getAll);
let resolver = app.store();

app.config('resolver', resolver.getOrSet);
app.config('resolve', resolver.getAll);

app.config('group', function (route, fn) {
  var instance = this;
  var newInstance = Object.create(this);
  Object.defineProperty(newInstance, 'route', {
    get: () => (instance.route || "") + route
  });
  fn.call(newInstance, newInstance);
});

let routes = app.store();
// app.config('route', function(route, view){
//   routes.getOrSet(this.route || "" + route, view)
// })
app.config('route', routes.getOrSet);
app.config('routes', routes.getAll);

app.config('view', (component, controller) => $ => {
  return controller($).then(data => render(m(component, { data })).then(t => {
    $.header('content-type', 'text/html');
    $.send(baseTemplate.replace('<!--body-->', t));
    $.end();
  }));
});

app.config('json', controller => $ => {
  controller($).then(data => {
    $.data.data = data;
    $.json();
  });
});

app.config('attach', (routeName, controller) => {
  server.get(routeName, app.view(app.routes[routeName], controller));
  server.post(routeName, app.json(controller));
});

app.config('chain', function () {
  return init => Array.prototype.reduce.call(arguments, (acc, x) => acc && acc.then ? acc.then(x) : x(acc), init);
});

app.modules();
app.run(function ({ server, resolve }) {
  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  resolve();
  function model(target, prop, descriptor) {
    console.log('@model');
    console.log(target);
    console.log(prop);
    console.log(descriptor);
  }
  // function Enum(target, prop, descriptor){
  //   target.prototype[prop] = 'enum'
  //   return function()
  // }
  function decorator(fn) {
    return function (...params) {
      let descriptor = params[params.length - 1];
      if (typeof descriptor === 'object' && descriptor.hasOwnProperty('enumerable') && descriptor.hasOwnProperty('initializer') && descriptor.hasOwnProperty('configurable')) {
        return fn([], ...params);
      } else {
        return fn.bind(null, params);
      }
    };
  }
  let Number = decorator(([options], target, prop, descriptor) => {
    if (!options) {
      descriptor.initializer = () => 'Number';
    } else {
      options.type = 'Number';
      descriptor.initializer = () => options;
    }
    return descriptor;
  });
  let jimmy = decorator(([one, two, three], target, property, descriptor) => {
    if (one != null) {
      descriptor.initializer = () => one + two + three;
    } else {
      descriptor.initializer = () => 'nothing';
    }
  });
  let belongsTo = decorator(([options], target, prop, descriptor) => {
    descriptor.initializer = () => i;
    let i = {};
    let t = i.model = target.name; // let t = $.model[target.name]
    if (!options) {
      let r = i.target = prop; // $.model[prop]
      // t[prop] = t.belongsTo(r)
      i.option = 'belongsTo';
    } else {
      let alias = options.useModel;
      if (alias) {
        options.as = prop;
        delete options.useModel;
      }
      let r = i.target = alias || prop;
      // r = i.target = $.model[alias || prop]
      options.relation = 'belongsTo';
      i.options = options;
    }
  });
  function Model(target) {
    return function () {
      return {
        gay: true
      };
    };
  }

  let Course = (_dec = Number({
    mothaFucka: true
  }), _dec2 = belongsTo({ useModel: 'user' }), _dec3 = jimmy(1, 2, 3), Model(_class = (_class2 = class Course {
    constructor() {
      _initDefineProp(this, 'prop', _descriptor, this);

      _initDefineProp(this, 'prop2', _descriptor2, this);

      _initDefineProp(this, 'Degen', _descriptor3, this);

      _initDefineProp(this, 'Author', _descriptor4, this);

      _initDefineProp(this, 'a', _descriptor5, this);

      _initDefineProp(this, 'aa', _descriptor6, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'prop', [Number], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prop2', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'Degen', [belongsTo], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'Author', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'a', [jimmy], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'aa', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);

  server.get('/', $ => {
    $.data.message = 'Hello World!!!!';
    $.data.context = this.constructor.name;
    $.data.r = Object.getOwnPropertyNames(routes);
    $.data.app = app.constructor.name;
    render(m('div.asd.asd')).then(t => {
      $.data.template = t;
      $.data.class = new Course();
      $.json();
    });
  });
});

// .run(['models'], ($, models)=>{
//   $.run()
// })

// .then(() => {
//   console.log('Connection has been established successfully.')
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err)
// })


// force: true will drop the table if it already exists

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({ m }) {
  return {
    view: function (vnode) {
      return m('.container', [m('h1.punchline', vnode.attrs.title), m('.row', vnode.children)]);
    }
  };
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({
  _, m, slugify,
  components: { Topbar, Content, CourseItem }
}) {
  var stateModel = _.once(data => {
    console.log(data);
    let state = {
      title: data.title,
      customSlug: data.slug,
      description: data.description,
      setDescription: function (v) {
        state.description = v;
      },
      setTitle: function (v) {
        state.title = v;
      },
      setSlug: function (v) {
        state.customSlug = slugify(v);
      }
    };
    Object.defineProperty(state, 'slug', {
      get: () => state.customSlug || slugify(state.title)
    });
    return state;
  });
  return {
    view: function (vnode) {
      let item = stateModel(vnode.attrs.data);
      return m('div', [m(Topbar), m(Content, {
        title: "Edit course"
      }, [m('#main-panel.col-md-9', [m('input[type="text"].form-control.form-control-lg[id="title"][name="title"][aria-describedby="couseTitle"][placeholder="Title"]', {
        oninput: m.withAttr("value", item.setTitle),
        value: item.title
      }), m('small#couseTitle.form-text.text-muted', "We'll never share your email with anyone else."), m('input[type="text"].form-control.form-control-sm', {
        value: item.slug,
        onchange: m.withAttr("value", item.setSlug)
      }), m('.form-section-meta', [m('.form-group', [m('label[for="description"]', 'Description'), m('textarea#description.form-control[name="description"]', {
        value: item.description,
        oninput: m.withAttr("value", item.setDescription)
      })]), m('.row', [m('.col-md-4', m('select.form-control', ['Beginner', 'Intermediate', 'Advanced'].map(items => m('option', items)))), m('.col-md-4', m('select.form-control', ['Red', 'Orange', 'Blue'].map(items => m('option', items)))), m('.col-md-4', m('input[type="text"].form-control'))])]), m('a.btn.btn-primary.btn-lg[href="/courses"]', {
        oncreate: m.route.link
      }, 'Click here!!!!')]), m('#side-panel.col-md-3', m(CourseItem, vnode.attrs.data))])]);
    }
  };
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_item_less__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_item_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__course_item_less__);

/* harmony default export */ __webpack_exports__["a"] = (function ({ m }) {
  return {
    view: function ({ attrs, children }) {
      return m('.course', [m('a.thumb', {
        bg: attrs.color,
        href: '/course/' + attrs.slug,
        oncreate: m.route.link
      }, [m(".thumb-img", {
        bg: attrs.color,
        style: {
          backgroundImage: `url(/uploads/courses/${attrs.image})`
        }
      }), m("h2.name", m("span", attrs.title))]), m('.inner', m('ul', [m("li.description", attrs.description), m("li.author", ['by ', m('a', { href: attrs.author.id }, `${attrs.author.firstName} ${attrs.author.lastName}`)]), m("li.level", `Level: ${attrs.level}`)]))]);
    }
  };
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function ({
  m, components: { Topbar, Content, CourseItem }
}) {
  return {
    view: function (vnode) {
      console.log(vnode.attrs);
      return m('div', [m(Topbar), m(Content, {
        title: "Browse our courses..."
      }, vnode.attrs.data.map(course => m('.col-sm-6.col-md-4.col-lg-3', m(CourseItem, course))))]);
    }
  };
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topbar_less__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topbar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topbar_less__);

/* harmony default export */ __webpack_exports__["a"] = (function ({ m }) {
  return {
    view: function () {
      return m("header#header", m("div.container", m("div.row", [m("div.col-sm-3.logo", m("a#logo", { href: "/" })), m("div.col-sm-9.navigation", m("nav", { role: "navigation" }, m("ul.menu", m("li.nav-item", m('a', { href: "/signin" }, 'Login')), m("li.nav-item", m('a', { href: "/signup" }, 'Sign up')))))])));
    }
  };
});

/***/ }),
/* 43 */
/***/ (function(module, exports) {



/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), data = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) counters[key] = 0
				level = counters[key]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Known limitations:

- `option.selected` can't be set/read when the option doesn't have a `select` parent
- `element.attributes` is just a map of attribute names => Attr objects stubs
- ...

*/

/*
options:
- spy:(f: Function) => Function
*/

module.exports = function(options) {
	options = options || {}
	var spy = options.spy || function(f){return f}
	var spymap = []
	function registerSpies(element, spies) {
		if(options.spy) {
			var i = spymap.indexOf(element)
			if (i === -1) {
				spymap.push(element, spies)
			} else {
				var existing = spymap[i + 1]
				for (var k in spies) existing[k] = spies[k]
			}
		}
	}
	function getSpies(element) {
		if (element == null || typeof element !== "object") throw new Error("Element expected")
		if(options.spy) return spymap[spymap.indexOf(element) + 1]
	}

	function isModernEvent(type) {
		return type === "transitionstart" || type === "transitionend" || type === "animationstart" || type === "animationend"
	}
	function appendChild(child) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var index = this.childNodes.indexOf(child)
		if (index > -1) this.childNodes.splice(index, 1)
		if (child.nodeType === 11) {
			while (child.firstChild != null) this.appendChild(child.firstChild)
			child.childNodes = []
		}
		else {
			this.childNodes.push(child)
			if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
			child.parentNode = this
		}
	}
	function removeChild(child) {
		var index = this.childNodes.indexOf(child)
		if (index > -1) {
			this.childNodes.splice(index, 1)
			child.parentNode = null
		}
		else throw new TypeError("Failed to execute 'removeChild'")
	}
	function insertBefore(child, reference) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var refIndex = this.childNodes.indexOf(reference)
		var index = this.childNodes.indexOf(child)
		if (reference !== null && refIndex < 0) throw new TypeError("Invalid argument")
		if (index > -1) this.childNodes.splice(index, 1)
		if (reference === null) this.appendChild(child)
		else {
			if (child.nodeType === 11) {
				this.childNodes.splice.apply(this.childNodes, [refIndex, 0].concat(child.childNodes))
				while (child.firstChild) {
					var subchild = child.firstChild
					child.removeChild(subchild)
					subchild.parentNode = this
				}
				child.childNodes = []
			}
			else {
				this.childNodes.splice(refIndex, 0, child)
				if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
				child.parentNode = this
			}
		}
	}
	function getAttribute(name) {
		if (this.attributes[name] == null) return null
		return this.attributes[name].value
	}
	function setAttribute(name, value) {
		/*eslint-disable no-implicit-coercion*/
		// this is the correct kind of conversion, passing a Symbol throws in browsers too.
		var nodeValue = "" + value
		/*eslint-enable no-implicit-coercion*/

		this.attributes[name] = {
			namespaceURI: null,
			get value() {return nodeValue},
			set value(value) {
				/*eslint-disable no-implicit-coercion*/
				nodeValue = "" + value
				/*eslint-enable no-implicit-coercion*/
			},
			get nodeValue() {return nodeValue},
			set nodeValue(value) {
				this.value = value
			}
		}
	}
	function setAttributeNS(ns, name, value) {
		this.setAttribute(name, value)
		this.attributes[name].namespaceURI = ns
	}
	function removeAttribute(name) {
		delete this.attributes[name]
	}
	function hasAttribute(name) {
		return name in this.attributes
	}
	var declListTokenizer = /;|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'/g
	/**
	 * This will split a semicolon-separated CSS declaration list into an array of
	 * individual declarations, ignoring semicolons in strings.
	 *
	 * Comments are also stripped.
	 *
	 * @param {string} declList
	 * @return {string[]}
	 */
	function splitDeclList(declList) {
		var indices = [], res = [], match

		// remove comments, preserving comments in strings.
		declList = declList.replace(
			/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*')|\/\*[\s\S]*?\*\//g,
			function(m, str){
				return str || ""
			}
		)
		/*eslint-disable no-cond-assign*/
		while (match = declListTokenizer.exec(declList)) {
			if (match[0] === ";") indices.push(match.index)
		}
		/*eslint-enable no-cond-assign*/
		for (var i = indices.length; i--;){
			res.unshift(declList.slice(indices[i] + 1))
			declList = declList.slice(0, indices[i])
		}
		res.unshift(declList)
		return res
	}

	var activeElement
	var $window = {
		document: {
			createElement: function(tag) {
				var cssText = ""
				var style = {}
				Object.defineProperty(style, "cssText", {
					get: function() {return cssText},
					set: function (value) {
						var buf = []
						if (typeof value === "string") {
							for (var key in style) style[key] = ""
							var rules = splitDeclList(value)
							for (var i = 0; i < rules.length; i++) {
								var rule = rules[i]
								var colonIndex = rule.indexOf(":")
								if (colonIndex > -1) {
									var rawKey = rule.slice(0, colonIndex).trim()
									var key = rawKey.replace(/-\D/g, function(match) {return match[1].toUpperCase()})
									var value = rule.slice(colonIndex + 1).trim()
									if (key !== "cssText") {
										style[key] = value
										buf.push(rawKey + ": " + value + ";")
									}
								}
							}
							cssText = buf.join(" ")
						}
					}
				})
				var events = {}
				var element = {
					nodeType: 1,
					nodeName: tag.toUpperCase(),
					namespaceURI: "http://www.w3.org/1999/xhtml",
					appendChild: appendChild,
					removeChild: removeChild,
					insertBefore: insertBefore,
					hasAttribute: hasAttribute,
					getAttribute: getAttribute,
					setAttribute: setAttribute,
					setAttributeNS: setAttributeNS,
					removeAttribute: removeAttribute,
					parentNode: null,
					childNodes: [],
					attributes: {},
					get firstChild() {
						return this.childNodes[0] || null
					},
					get nextSibling() {
						if (this.parentNode == null) return null
						var index = this.parentNode.childNodes.indexOf(this)
						if (index < 0) throw new TypeError("Parent's childNodes is out of sync")
						return this.parentNode.childNodes[index + 1] || null
					},
					set textContent(value) {
						this.childNodes = []
						if (value !== "") this.appendChild($window.document.createTextNode(value))
					},
					set innerHTML(value) {
						while (this.firstChild) this.removeChild(this.firstChild)

						var stack = [this], depth = 0, voidElements = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
						value.replace(/<([a-z0-9\-]+?)((?:\s+?[^=]+?=(?:"[^"]*?"|'[^']*?'|[^\s>]*))*?)(\s*\/)?>|<\/([a-z0-9\-]+?)>|([^<]+)/g, function(match, startTag, attrs, selfClosed, endTag, text) {
							if (startTag) {
								var element = $window.document.createElement(startTag)
								attrs.replace(/\s+?([^=]+?)=(?:"([^"]*?)"|'([^']*?)'|([^\s>]*))/g, function(match, key, doubleQuoted, singleQuoted, unquoted) {
									var keyParts = key.split(":")
									var name = keyParts.pop()
									var ns = keyParts[0]
									var value = doubleQuoted || singleQuoted || unquoted || ""
									if (ns != null) element.setAttributeNS(ns, name, value)
									else element.setAttribute(name, value)
								})
								stack[depth].appendChild(element)
								if (!selfClosed && voidElements.indexOf(startTag.toLowerCase()) < 0) stack[++depth] = element
							}
							else if (endTag) {
								depth--
							}
							else if (text) {
								stack[depth].appendChild($window.document.createTextNode(text)) // FIXME handle html entities
							}
						})
					},
					get style() {
						return style
					},
					set style(_){
						// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#Setting_style
						throw new Error("setting element.style is not portable")
					},
					get className() {
						return this.attributes["class"] ? this.attributes["class"].value : ""
					},
					set className(value) {
						if (this.namespaceURI === "http://www.w3.org/2000/svg") throw new Error("Cannot set property className of SVGElement")
						else this.setAttribute("class", value)
					},
					focus: function() {activeElement = this},
					addEventListener: function(type, callback) {
						if (events[type] == null) events[type] = [callback]
						else events[type].push(callback)
					},
					removeEventListener: function(type, callback) {
						if (events[type] != null) {
							var index = events[type].indexOf(callback)
							if (index > -1) events[type].splice(index, 1)
						}
					},
					dispatchEvent: function(e) {
						if (this.nodeName === "INPUT" && this.attributes["type"] != null && this.attributes["type"].value === "checkbox" && e.type === "click") {
							this.checked = !this.checked
						}

						e.target = this
						if (events[e.type] != null) {
							for (var i = 0; i < events[e.type].length; i++) {
								events[e.type][i].call(this, e)
							}
						}
						e.preventDefault = function() {
							// TODO: should this do something?
						}
						if (typeof this["on" + e.type] === "function" && !isModernEvent(e.type)) this["on" + e.type](e)
					},
					onclick: null,
				}

				if (element.nodeName === "A") {
					Object.defineProperty(element, "href", {
						get: function() {return this.attributes["href"] === undefined ? "" : "[FIXME implement]"},
						set: function(value) {this.setAttribute("href", value)},
						enumerable: true,
					})
				}

				if (element.nodeName === "INPUT") {
					var checked
					Object.defineProperty(element, "checked", {
						get: function() {return checked === undefined ? this.attributes["checked"] !== undefined : checked},
						set: function(value) {checked = Boolean(value)},
						enumerable: true,
					})

					var value = ""
					var valueSetter = spy(function(v) {
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return value
						},
						set: valueSetter,
						enumerable: true,
					})

					// we currently emulate the non-ie behavior, but emulating ie may be more useful (throw when an invalid type is set)
					var typeSetter = spy(function(v) {
						this.setAttribute("type", v)
					})
					Object.defineProperty(element, "type", {
						get: function() {
							if (!this.hasAttribute("type")) return "text"
							var type = this.getAttribute("type")
							return (/^(?:radio|button|checkbox|color|date|datetime|datetime-local|email|file|hidden|month|number|password|range|research|search|submit|tel|text|url|week|image)$/)
							.test(type)
							? type
							: "text"
						},
						set: typeSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter,
						typeSetter: typeSetter
					})
				}


				if (element.nodeName === "TEXTAREA") {
					var wasNeverSet = true
					var value = ""
					var valueSetter = spy(function(v) {
						wasNeverSet = false
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return wasNeverSet && this.firstChild ? this.firstChild.nodeValue : value
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}

				/* eslint-disable radix */

				if (element.nodeName === "CANVAS") {
					Object.defineProperty(element, "width", {
						get: function() {return this.attributes["width"] ? Math.floor(parseInt(this.attributes["width"].value) || 0) : 300},
						set: function(value) {this.setAttribute("width", Math.floor(Number(value) || 0).toString())},
					})
					Object.defineProperty(element, "height", {
						get: function() {return this.attributes["height"] ? Math.floor(parseInt(this.attributes["height"].value) || 0) : 300},
						set: function(value) {this.setAttribute("height", Math.floor(Number(value) || 0).toString())},
					})
				}

				/* eslint-enable radix */

				function getOptions(element) {
					var options = []
					for (var i = 0; i < element.childNodes.length; i++) {
						if (element.childNodes[i].nodeName === "OPTION") options.push(element.childNodes[i])
						else if (element.childNodes[i].nodeName === "OPTGROUP") options = options.concat(getOptions(element.childNodes[i]))
					}
					return options
				}
				function getOptionValue(element) {
					return element.attributes["value"] != null ?
						element.attributes["value"].value :
						element.firstChild != null ? element.firstChild.nodeValue : ""
				}
				if (element.nodeName === "SELECT") {
					// var selectedValue
					var selectedIndex = 0
					Object.defineProperty(element, "selectedIndex", {
						get: function() {return getOptions(this).length > 0 ? selectedIndex : -1},
						set: function(value) {
							var options = getOptions(this)
							if (value >= 0 && value < options.length) {
								// selectedValue = getOptionValue(options[selectedIndex])
								selectedIndex = value
							}
							else {
								// selectedValue = ""
								selectedIndex = -1
							}
						},
						enumerable: true,
					})
					var valueSetter = spy(function(value) {
						if (value === null) {
							selectedIndex = -1
						} else {
							var options = getOptions(this)
							/*eslint-disable no-implicit-coercion*/
							var stringValue = "" + value
							/*eslint-enable no-implicit-coercion*/
							for (var i = 0; i < options.length; i++) {
								if (getOptionValue(options[i]) === stringValue) {
									// selectedValue = stringValue
									selectedIndex = i
									return
								}
							}
							// selectedValue = stringValue
							selectedIndex = -1
						}
					})
					Object.defineProperty(element, "value", {
						get: function() {
							if (this.selectedIndex > -1) return getOptionValue(getOptions(this)[this.selectedIndex])
							return ""
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}
				if (element.nodeName === "OPTION") {
					var valueSetter = spy(function(value) {
						/*eslint-disable no-implicit-coercion*/
						this.setAttribute("value", value === null ? "" : "" + value)
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {return getOptionValue(this)},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})

					Object.defineProperty(element, "selected", {
						// TODO? handle `selected` without a parent (works in browsers)
						get: function() {
							var options = getOptions(this.parentNode)
							var index = options.indexOf(this)
							return index === this.parentNode.selectedIndex
						},
						set: function(value) {
							if (value) {
								var options = getOptions(this.parentNode)
								var index = options.indexOf(this)
								if (index > -1) this.parentNode.selectedIndex = index
							}
							else this.parentNode.selectedIndex = 0
						},
						enumerable: true,
					})
				}
				return element
			},
			createElementNS: function(ns, tag, is) {
				var element = this.createElement(tag, is)
				element.nodeName = tag
				element.namespaceURI = ns
				return element
			},
			createTextNode: function(text) {
				/*eslint-disable no-implicit-coercion*/
				var nodeValue = "" + text
				/*eslint-enable no-implicit-coercion*/
				return {
					nodeType: 3,
					nodeName: "#text",
					parentNode: null,
					get nodeValue() {return nodeValue},
					set nodeValue(value) {
						/*eslint-disable no-implicit-coercion*/
						nodeValue = "" + value
						/*eslint-enable no-implicit-coercion*/
					},
				}
			},
			createDocumentFragment: function() {
				return {
					nodeType: 11,
					nodeName: "#document-fragment",
					appendChild: appendChild,
					insertBefore: insertBefore,
					removeChild: removeChild,
					parentNode: null,
					childNodes: [],
					get firstChild() {
						return this.childNodes[0] || null
					},
				}
			},
			createEvent: function() {
				return {
					initEvent: function(type) {this.type = type},
				}
			},
			get activeElement() {return activeElement},
		},
	}
	$window.document.documentElement = $window.document.createElement("html")
	$window.document.documentElement.appendChild($window.document.createElement("head"))
	$window.document.body = $window.document.createElement("body")
	$window.document.documentElement.appendChild($window.document.body)
	activeElement = $window.document.body

	if (options.spy) $window.__getSpies = getSpies

	return $window
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseURL = __webpack_require__(2)
var callAsync = __webpack_require__(1)

function debouncedAsync(f) {
	var ref
	return function() {
		if (ref != null) return
		ref = callAsync(function(){
			ref = null
			f()
		})
	}
}

module.exports = function(options) {
	if (options == null) options = {}

	var $window = options.window || {}
	var protocol = options.protocol || "http:"
	var hostname = options.hostname || "localhost"
	var port = ""
	var pathname = "/"
	var search = ""
	var hash = ""

	var past = [{url: getURL(), isNew: true, state: null, title: null}], future = []

	function getURL() {
		if (protocol === "file:") return protocol + "//" + pathname + search + hash
		return protocol + "//" + hostname + prefix(":", port) + pathname + search + hash
	}
	function setURL(value) {
		var data = parseURL(value, {protocol: protocol, hostname: hostname, port: port, pathname: pathname})
		var isNew = false
		if (data.protocol != null && data.protocol !== protocol) protocol = data.protocol, isNew = true
		if (data.hostname != null && data.hostname !== hostname) hostname = data.hostname, isNew = true
		if (data.port != null && data.port !== port) port = data.port, isNew = true
		if (data.pathname != null && data.pathname !== pathname) pathname = data.pathname, isNew = true
		if (data.search != null && data.search !== search) search = data.search, isNew = true
		if (data.hash != null && data.hash !== hash) {
			hash = data.hash
			if (!isNew) {
				hashchange()
			}
		}
		return isNew
	}

	function prefix(prefix, value) {
		if (value === "") return ""
		return (value.charAt(0) !== prefix ? prefix : "") + value
	}
	function _hashchange() {
		if (typeof $window.onhashchange === "function") $window.onhashchange({type: "hashchange"})
	}
	var hashchange = debouncedAsync(_hashchange)
	function popstate() {
		if (typeof $window.onpopstate === "function") $window.onpopstate({type: "popstate", state: $window.history.state})
	}
	function unload() {
		if (typeof $window.onunload === "function") $window.onunload({type: "unload"})
	}

	$window.location = {
		get protocol() {
			return protocol
		},
		get hostname() {
			return hostname
		},
		get port() {
			return port
		},
		get pathname() {
			return pathname
		},
		get search() {
			return search
		},
		get hash() {
			return hash
		},
		get origin() {
			if (protocol === "file:") return "null"
			return protocol + "//" + hostname + prefix(":", port)
		},
		get host() {
			if (protocol === "file:") return ""
			return hostname + prefix(":", port)
		},
		get href() {
			return getURL()
		},

		set protocol(value) {
			throw new Error("Protocol is read-only")
		},
		set hostname(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			hostname = value
		},
		set port(value) {
			if (protocol === "file:") throw new Error("Port is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			port = value
		},
		set pathname(value) {
			if (protocol === "file:") throw new Error("Pathname is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			pathname = prefix("/", value)
		},
		set search(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			search = prefix("?", value)
		},
		set hash(value) {
			var oldHash = hash
			past.push({url: getURL(), isNew: false})
			future = []
			hash = prefix("#", value)
			if (oldHash != hash) hashchange()
		},

		set origin(value) {
			//origin is writable but ignored
		},
		set host(value) {
			//host is writable but ignored in Chrome
		},
		set href(value) {
			var url = getURL()
			var isNew = setURL(value)
			if (isNew) {
				setURL(url)
				unload()
				setURL(value)
			}
			past.push({url: url, isNew: isNew})
			future = []
		},
	}
	$window.history = {
		pushState: function(state, title, url) {
			past.push({url: getURL(), isNew: false, state: state, title: title})
			future = []
			setURL(url)
		},
		replaceState: function(state, title, url) {
			var entry = past[past.length - 1]
			entry.state = state
			entry.title = title
			setURL(url)
		},
		back: function() {
			if (past.length > 1) {
				var entry = past.pop()
				if (entry.isNew) unload()
				future.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		forward: function() {
			var entry = future.pop()
			if (entry != null) {
				if (entry.isNew) unload()
				past.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		get state() {
			return past.length === 0 ? null : past[past.length - 1].state
		},
	}
	$window.onpopstate = null,
	$window.onhashchange = null,
	$window.onunload = null

	return $window
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callAsync = __webpack_require__(1)
var parseURL = __webpack_require__(2)
var parseQueryString = __webpack_require__(45)

module.exports = function() {
	var routes = {}
	// var callback = "callback"
	var serverErrorHandler = function(url) {
		return {status: 500, responseText: "server error, most likely the URL was not defined " + url}
	}

	var $window = {
		XMLHttpRequest: function XMLHttpRequest() {
			var args = {}
			var headers = {}
			var aborted = false
			this.setRequestHeader = function(header, value) {
				headers[header] = value
			}
			this.getRequestHeader = function(header) {
				return headers[header]
			}
			this.open = function(method, url, async, user, password) {
				var urlData = parseURL(url, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
				args.method = method
				args.pathname = urlData.pathname
				args.search = urlData.search
				args.async = async != null ? async : true
				args.user = user
				args.password = password
			}
			this.send = function(body) {
				var self = this
				if(!aborted) {
					var handler = routes[args.method + " " + args.pathname] || serverErrorHandler.bind(null, args.pathname)
					var data = handler({url: args.pathname, query: args.search || {}, body: body || null})
					self.status = data.status
					self.responseText = data.responseText
				} else {
					self.status = 0
				}
				self.readyState = 4
				if (args.async === true) {
					callAsync(function() {
						if (typeof self.onreadystatechange === "function") self.onreadystatechange()
					})
				}
			}
			this.abort = function() {
				aborted = true
			}
		},
		document: {
			createElement: function(tag) {
				return {nodeName: tag.toUpperCase(), parentNode: null}
			},
			documentElement: {
				appendChild: function(element) {
					element.parentNode = this
					if (element.nodeName === "SCRIPT") {
						var urlData = parseURL(element.src, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
						var handler = routes["GET " + urlData.pathname] || serverErrorHandler.bind(null, element.src)
						var data = handler({url: urlData.pathname, query: urlData.search, body: null})
						parseQueryString(urlData.search)
						callAsync(function() {
							if (data.status === 200) {
								new Function("$window", "with ($window) return " + data.responseText).call($window, $window)
							}
							else if (typeof element.onerror === "function") {
								element.onerror({type: "error"})
							}
						})
					}
				},
				removeChild: function(element) {
					element.parentNode = null
				},
			},
		},
		$defineRoutes: function(rules) {
			routes = rules
		},
		$defineJSONPCallbackKey: function(/* key */) {
			// callback = key
		},
	}
	return $window
}


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map
import $ from 'moduler'

import User from './users/user.model'
import UserRelations from './users/user.relations'
import UserCtrl from './users/user.controller'
import Role from './roles-permissions/role.model'
import Permission from './roles-permissions/permission.model'
import RolePermission from './roles-permissions/roles-permissions.model'
import RoleCtrl from './roles-permissions/role.controller'
import PermissionCtrl from './roles-permissions/permission.controller'

// import UserRoutes from './users/user.routes'
// import PermissionRoutes from './roles-permissions/permission.routes'
// import RoleRoutes from './roles-permissions/role.routes'

$.module('admin', function($){
	$.schema({User})
	$.relation({User:UserRelations})
	$.controller({UserCtrl})
	$.schema({Role})
	$.schema({Permission})
	$.schema({RolePermission})
	$.relation('Role', require('./roles-permissions/role.relations'))
	$.relation('Permission', require('./roles-permissions/permission.relations'))
	$.controller({RoleCtrl})
	$.controller({PermissionCtrl})
	// $.route({UserRoutes})
	// $.route({RoleRoutes})
	// $.route({PermissionRoutes})
	$.resolver({'admin': function({
		api,
		server,
		controllers: { PermissionCtrl, RoleCtrl, UserCtrl }
	}){

		api.get('/users', UserCtrl.index)
		api.get('/user/:username', UserCtrl.single)

	  server
	    .get('/users', UserCtrl.index)
	    .get('/user/new', UserCtrl.new)
	    .get('/user/install', UserCtrl.install)

	    .get('/permissions', PermissionCtrl.index)
	    .get('/permission/new', PermissionCtrl.new)
	    .get('/permission/install', PermissionCtrl.install)

	    .get('/roles', RoleCtrl.index)
	    .get('/role/new', RoleCtrl.new)
	    .get('/role/install', RoleCtrl.install)
		}
	})
	// console.log('ROUTES', $.routes.PermissionRoutes)
})

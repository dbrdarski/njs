import $ from 'moduler'

import Role from './role.model'
import Permission from './permission.model'
import RolePermission from './roles-permissions.model'
import RoleCtrl from './role.controller'
import PermissionCtrl from './permission.controller'
// import PermissionRoutes from './permission.routes'
// import RoleRoutes from './role.routes'

$.module('admin', function($){
	$.model({Role})
	$.model({Permission})
	$.model({RolePermission})
	$.relation('Role', require('./role.relations'))
	$.relation('Permission', require('./permission.relations'))
	$.controller({RoleCtrl})
	$.controller({PermissionCtrl})
	// $.route({RoleRoutes})
	// $.route({PermissionRoutes})
	$.resolver({'roles-and-permissions': function({
		server,
		controllers: { PermissionCtrl, RoleCtrl }
	}){
	  server
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

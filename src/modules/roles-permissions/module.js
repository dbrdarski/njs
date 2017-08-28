import $ from 'moduler'

import Role from './role.model'
import Permission from './permission.model'
import RolePermission from './roles-permissions.model'
import RoleCtrl from './role.controller'
import PermissionCtrl from './permission.controller'
import PermissionRoutes from './permission.routes'
import RoleRoutes from './role.routes'

$.module('admin', function($){	
	$.model({Role})
	$.model({Permission})
	$.model({RolePermission})
	$.relation('Role', require('./role.relations'))
	$.relation('Permission', require('./permission.relations'))
	$.controller({RoleCtrl})
	$.controller({PermissionCtrl})
	$.route({RoleRoutes})
	$.route({PermissionRoutes})
	// console.log('ROUTES', $.routes.PermissionRoutes)
})

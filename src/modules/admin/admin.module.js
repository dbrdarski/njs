import $ from 'moduler'

import User from './users/user.model'
import AdminInstall from './admin.seed'
// import UserRelations from './users/user.relations'
import UserCtrl from './users/user.controller'
import Role from './roles-permissions/role.model'
import Permission from './roles-permissions/permission.model'
import RolePermission from './roles-permissions/roles-permissions.model'
import RoleCtrl from './roles-permissions/role.controller'
import PermissionCtrl from './roles-permissions/permission.controller'

$.module('admin', function($){
	$.model({User})
	// $.relation({User:UserRelations})
	$.controller({UserCtrl})
	$.model({Role})
	$.model({Permission})
	$.model({RolePermission})
	$.controller({RoleCtrl})
	$.controller({PermissionCtrl})

	$.resolver({'admin': function({
		api,
		server,
		controllers: { PermissionCtrl, RoleCtrl, UserCtrl }
	}){

		api.get('/users', UserCtrl.index)
		api.get('/user/:username', UserCtrl.single)

	  server
			// .get('/install/admin')
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

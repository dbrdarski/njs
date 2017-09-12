import $ from 'moduler'

import User from './user.model'
import UserRelations from './user.relations'
import UserCtrl from './user.controller'
// import UserRoutes from './user.routes'

$.module('users', function($){
	$.model({User})
	$.relation({User:UserRelations})
	$.controller({UserCtrl})
	// $.route({UserRoutes})

	$.resolver({'users': function({
	    server,
	    controllers : { UserCtrl }
	  }){
	  server
	    .get('/users', UserCtrl.index)
	    .get('/user/new', UserCtrl.new)
	    .get('/user/install', UserCtrl.install)
		}
	})

})

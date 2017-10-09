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
			api,
	    server,
	    controllers : { UserCtrl }
	  }){


		api.get('/users', UserCtrl.index)
		api.get('/user/:username', UserCtrl.single)

	  server
	    .get('/users', UserCtrl.index)
	    .get('/user/new', UserCtrl.new)
	    .get('/user/install', UserCtrl.install)
		}
	})

})

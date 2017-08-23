import $ from 'moduler'

import User from './user.model'
import UserRoutes from './user.routes'
import UserCtrl from './user.controller'
import UserRelations from './user.relations'

$.module('users', function($){
	$.model({User})
	$.relation({User:UserRelations})
	$.controller({UserCtrl})
	$.route({UserRoutes})
})

import $ from 'moduler'

import Lession from './lession.model'
import LessionRelations from './lession.relations'
import LessionCtrl from './lession.controller'
// import LessionRoutes from './lession.routes'

$.module('lessions', function($){
	$.model({Lession})
	// $.relation({Lession:LessionRelations})
	$.controller({LessionCtrl})
	// $.route({LessionRoutes})
	$.resolver({lessions: function({
		server,
		controllers : { LessionCtrl }
	}){
		  server
		    .get('/lessions', LessionCtrl.index)
		    .get('/lession/new', LessionCtrl.new)
		    .get('/lession/install', LessionCtrl.install)
		}
	})
})

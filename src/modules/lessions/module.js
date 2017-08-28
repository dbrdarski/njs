import $ from 'moduler'

import Lession from './lession.model'
import LessionRoutes from './lession.routes'
import LessionCtrl from './lession.controller'
import LessionRelations from './lession.relations'

$.module('lessions', function($){
	$.model({Lession})
	$.relation({Lession:LessionRelations})
	$.controller({LessionCtrl})
	$.route({LessionRoutes})
})

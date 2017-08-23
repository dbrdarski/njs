import $ from 'moduler'

import Lession from './lession.model'
import LessionRoutes from './lession.routes'
import LessionCtrl from './lession.controller'


$.module('lessions', function($){
	$.model({Lession})
	$.relation('Lession', require('./lession.relations'))
	$.controller({LessionCtrl})
	$.route({LessionRoutes})
})

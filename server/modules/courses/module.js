import $ from 'moduler'

import Course from './course.model'
import CourseRoutes from './course.routes'
import CourseCtrl from './course.controller'

$.module('courses', function($){
	$.model({Course})
	$.relation('Course', require('./course.relations'))
	$.controller({CourseCtrl})
	$.route({CourseRoutes})
})

import $ from 'moduler'

import Course from './course.model'
import CourseRelations from './course.relations'
import CourseRoutes from './course.routes'
import CourseCtrl from './course.controller'


$.module('courses', function($){
	$.model({Course})
	$.relation({Course:CourseRelations})
	$.controller({CourseCtrl})
	$.route({CourseRoutes})
})

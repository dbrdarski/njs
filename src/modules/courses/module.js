import $ from 'moduler'

import Course from './course.model'
import CourseRelations from './course.relations'
import CourseCtrl from './course.controller'
// import CourseRoutes from './course.routes'


$.module('courses', function($){
	$.model({Course})
	$.relation({Course:CourseRelations})
	$.controller({CourseCtrl})
	// $.route({CourseRoutes}) 			// => this should be removed
																// instead, user code snipped below
	$.resolver('courses', function({
		attach,
		server,
		controllers :  { CourseCtrl }
	}){
		attach('/courses', CourseCtrl.index)
		server
			.get('/course/new', CourseCtrl.new)
			.get('/course/install', CourseCtrl.install)
	})
})

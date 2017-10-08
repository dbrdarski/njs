import $ from 'moduler'

import Topbar from './topbar.component'
import CourseItem from './course-item.component'
import Content from './content.component'
import CoursesIndex from './courses.template'
import CourseEdit from './course-edit.template'

$.module('templates', function($){
  $.component({Topbar})
  $.component({Content})
  $.component({CourseItem})
  $.component({CoursesIndex})
  $.component({CourseEdit})
  $.route({'/courses': CoursesIndex})
  $.route({'/course/new': CourseEdit})
  $.route({'/course/:slug': CourseEdit})
})

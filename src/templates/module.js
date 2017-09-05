import $ from 'moduler'

import Topbar from './topbar.component'
import CourseItem from './course-item.component'
import Content from './content.component'
import Page from './page.component'
import Page2 from './page.component2'

$.module('templates', function($){
  $.component({Topbar})
  $.component({Content})
  $.component({CourseItem})
  $.component({Page})
  $.component({Page2})
})

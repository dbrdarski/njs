import $ from 'moduler'

import Topbar from './topbar.component'
import Page from './page.component'

$.module('templates', function($){
  $.component({Topbar})
  $.component({Page})
})

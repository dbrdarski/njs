import $ from 'moduler'

import Navbar from './navbar.component'
import Page from './page.component'

$.module('templates', function($){
  $.component({Navbar})
  $.component({Page})
})

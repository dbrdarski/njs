import $ from 'moduler'
import slugify from './slugify'
import kebab from './kebab'
import decorators from './decorators'

$.config('str', {
  slugify, kebab
})

$.module('utils', function(){
  $.config('decorators', decorators($))
})
// $.modules('decorators')
// $.config('decorators', decorators)

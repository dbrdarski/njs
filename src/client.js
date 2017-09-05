import './main.less'
import m from 'mithril'

var app = require("moduler")
app.config('m', m)

let components = app.store()
app.config('component', components.getOrSet)
app.config('components', components.getAll)

import './templates/module'

app.run(['templates'], function({
  components: { Page }
}){
  console.log(Page)
  m.mount(document.body, Page)
})
console.log(app)

// console.log(c, a)

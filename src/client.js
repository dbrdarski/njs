import './main.less'
import m from 'mithril'

var app = require("moduler")
app.config('m', m);

let components = app.store();
app.config('component', components.getOrSet);
app.config('components', components.getAll);

import './templates/module'

app.run(['templates'], function({
  components: { Topbar }
}){
  console.log(Topbar)
  m.mount(document.body, Topbar)

})
console.log(app)

// console.log(c, a)

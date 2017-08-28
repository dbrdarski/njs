import './main.less'
import m from 'mithril'

var app = require("moduler")
app.config('m', m);

let components = app.store();
app.config('component', components.getOrSet);
app.config('components', components.getAll);

import './templates/module'

app.run(['templates'], function({
  components: { Navbar }
}){
  console.log(Navbar)
  m.mount(document.body, Navbar)

})
console.log(app)

// console.log(c, a)

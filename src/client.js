import './main.less'
import m from 'mithril'

var app = require("moduler")
app.config('m', m)

let components = app.store()
app.config('component', components.getOrSet)
app.config('components', components.getAll)

import './templates/module'

let routes = app.store()
app.config('group', function(route, fn){
  var instance = this
  var newInstance = Object.create(this);
  Object.defineProperty(newInstance, 'route', {
    get : ()=> (instance.route || "") + route
  })
  fn.call(newInstance, newInstance)
})
// app.config('route', function(route, view){
//   routes.getOrSet(this.route || "" + route, view)
// })
app.config('route', routes.getOrSet)
app.config('routes', routes.getAll)


let routeHandler = (route, view)=>{
  var items = [];
  return {
    onmatch: () => new Promise((resolve, reject) => {
      m.request(route, { method: "POST" }).then((data)=>{
        items = data.items;
        console.log(data.items)
        resolve(view)
      })
    }),
    render: vnode => {
      console.log('AWESOME!!!!!!')
      vnode.attrs.items = items;
      return vnode
    }
  }
}

app.run(['templates'], function({
  components: { Page }
}){
  // console.log(Page)
  // => m.request('route').then(()=>m.mount(...))
  m.route.prefix("")

  let routes = app.routes
  // let routes = app.routes()

  m.route(document.body, '/courses', {
    '/courses' : routeHandler('/courses', routes['/courses'])
  })
  // m.mount(document.body, Page)
})
// console.log(app)

// console.log(c, a)

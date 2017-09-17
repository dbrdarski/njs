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
  var data = [];
  return {
    onmatch: () => new Promise((resolve, reject) => {
      m.request(window.location.href, { method: "POST" }).then((responseData)=>{
        data = responseData.data;
        // console.log(data)
        resolve(view)
      })
    }),
    render: vnode => {
      vnode.attrs.data = data;
      return vnode
    }
  }
}

app.run(['templates'], function({
  components: { CoursesIndex }
}){
  // console.log(CoursesIndex)
  // => m.request('route').then(()=>m.mount(...))
  m.route.prefix("")

  let routes = app.routes()
  let rs = {}
  // Object.keys(routes).map(components, routes => )
  for (let  r in routes){
    rs[r] = routeHandler(r, routes[r])
  }
  // console.log(["ROUTES", routes()])
  // // let routes = app.routes()

  // m.route(document.body, '/courses', {
  //   '/courses' : routeHandler('/courses', routes['/courses'])
  // })
  m.route(document.body, '/courses', rs)

  // // m.mount(document.body, CoursesIndex)
})
// console.log(app)

// console.log(c, a)

import './main.less'
import m from 'mithril'
import r from 'ramda'

var app = require("moduler")
app.config('m', m)
app.config('_', r)

let components = app.store()
app.config('component', components.getOrSet)
app.config('components', components.getAll)

import './templates/module'

let routes = app.store()

app.config('str', {
  slugify: function(st){
    st = st.toLowerCase()
    st = st.replace(/[\u00C0-\u00C5]/ig,'a');
    st = st.replace(/[\u00C8-\u00CB]/ig,'e');
    st = st.replace(/[\u00CC-\u00CF]/ig,'i');
    st = st.replace(/[\u00D2-\u00D6]/ig,'o');
    st = st.replace(/[\u00D9-\u00DC]/ig,'u');
    st = st.replace(/[\u00D1]/ig,'n');
    st = st.replace(/[\-]/g,' ');
    // st = st.replace(/[^a-z0-9 ]+/gi,'')
    st = st.trim().replace(/ /g,'-');
    st = st.replace(/[\-]{2,}/g,'-');
    st = st.replace(/^[^a-z]+/g,'');
    return (st.replace(/[^a-z0-9\- ]*/gi,''));
  }
})

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


let routeHandler = (route, view) => {
  var data;
  return {
    onmatch: () => new Promise((resolve, reject) => {
      m.request(window.location.href, { method: "POST" }).then((responseData) => {
        data = responseData.data;
        // console.log(data)
        resolve(view)
      })
    }),
    render: vnode => {
      vnode.attrs.data = data
      // let state = {
      //   title: data.title,
      //   customSlug: data.slug,
      //   description: data.description,
      //   setTitle: function(v) {
      //     state.title = v
      //   },
      //   setSlug: function(v) {
      //     state.customSlug = str.slugify(v)
      //   },
      //   setDescription: function(v){
      //     state.description = v
      //   }
      // }
      // Object.defineProperty(state, 'slug', {
      //   get: () => state.customSlug || str.slugify(state.title)
      // })
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

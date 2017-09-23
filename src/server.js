  // Create an app
    const app = require('moduler')
    const SQL = require('sequelize')
    const diet = require('diet')
    require('mithril/test-utils/browserMock')(global);
    const m = require('mithril')
    const render = require('mithril-node-render')
    const crossOrigin = require('diet-cross-origin')
    const dietStatic = require('diet-static')
    const r = require('ramda')

    var fs = require('fs')
    // app.module('a', function(){})
    // app.module({'b' : function(){}})

    const baseTemplate = fs.readFileSync('./bin/index.html', 'utf8')

    import './templates/module'
    import './modules'

    const server = diet()
    server.header(crossOrigin({
      defaults: {
        origin: '*',
        credentials: true
      }
    }))

    const staticFiles = dietStatic({ path: server.path+'/../bin' })
    // console.log('SERVER PATH', server.path)
    server.listen('http://localhost:8000')
    server.footer(staticFiles)

    const db = new SQL('postgres', 'postgres', 'qwerty', {
      host: 'localhost',
      dialect: 'postgres',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    })

    db.authenticate()

    app
      .config('server', server)
      .config('Q', SQL)
      .config('db', db)
      .config('_', r)

    // app.module('setup', function($){

    app.config('m', m)
    app.config('baseTemplate', baseTemplate)

    app.config('slugify', function(st){
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
    })

    let components = app.store()
    app.config('component', components.getOrSet)
    app.config('components', components.getAll)

    let models = app.store()
    app.config('model', models.getOrSet)
    app.config('models', models.getAll)
    let relations = app.store()
    app.config('relation', relations.getOrSet)
    app.config('relations', relations.getAll)
    let controllers = app.store()
    app.config('controller', controllers.getOrSet)
    app.config('controllers', controllers.getAll)
    let resolver = app.store()

    app.config('resolver', resolver.getOrSet)
    app.config('resolve', resolver.getAll)

    app.config('group', function(route, fn){
      var instance = this
      var newInstance = Object.create(this);
      Object.defineProperty(newInstance, 'route', {
        get : ()=> (instance.route || "") + route
      })
      fn.call(newInstance, newInstance)
    })

    let routes = app.store()
    // app.config('route', function(route, view){
    //   routes.getOrSet(this.route || "" + route, view)
    // })
    app.config('route', routes.getOrSet)
    app.config('routes', routes.getAll)

    app.config('view', (component, controller) => ($) => {
      return controller($).then(
        (data) => render(
          m(component, {data})
        )
        .then((t) => {
          $.header('content-type', 'text/html')
          $.send(baseTemplate.replace('<!--body-->', t))
          $.end()
        })
      )
    })

    app.config('json', controller => ($) => {
      controller($).then(
      (data) => {
        $.data.data = data
        $.json()
      })
    })

    app.config('attach', (routeName, controller) => {
      server.get(routeName, app.view(app.routes[routeName], controller))
      server.post(routeName, app.json(controller))
    })

    app.config('chain', function(){
	    return (init) => Array.prototype.reduce.call(arguments, (acc, x) => acc && acc.then ? acc.then(x) : x(acc), init)
    })

    app.modules()
    app.run(function({server, resolve}){
      resolve()
      server.get('/', ($)=>{
        $.data.message = 'Hello World!!!!'
        $.data.context = this.constructor.name
        $.data.r = Object.getOwnPropertyNames(routes)
        $.data.app = app.constructor.name
        render(m('div.asd.asd')).then((t)=>{
          $.data.template = t
          $.json()
        })
      })
    })

      // .run(['models'], ($, models)=>{
      //   $.run()
      // })

      // .then(() => {
      //   console.log('Connection has been established successfully.')
      // })
      // .catch(err => {
      //   console.error('Unable to connect to the database:', err)
      // })


// force: true will drop the table if it already exists

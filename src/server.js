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
    const jsonapi = require('jsonapi-serializer').Serializer
    app.config('jsonapi', jsonapi)

    var fs = require('fs')
    // app.module('a', function(){})
    // app.module({'b' : function(){}})

    const baseTemplate = fs.readFileSync('./bin/index.html', 'utf8')

    import './templates/module'
    import './view-models/module'
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

    const courseSerializer = new jsonapi('course', {
        attributes: ['id','title','slug','description','video','image','color','level','author'],
        author:{
          ref: 'id',
          attributes: ['id', 'username', 'email', 'firstName', 'lastName', 'image', 'description']
        }
    })

      // .register('author', {
      //   relationships: {
      //     course: {
      //       type: '<course></course>'
      //     }
      //   }
      // })

    // app.module('setup', function($){

    app.config('m', m)
    app.config('baseTemplate', baseTemplate)

    const components = app.store()

    app.config('component', components.getOrSet)
    app.config('components', components.getAll)

    const schemas = app.store()
    app.config('schema', schemas.getOrSet)
    app.config('schemas', schemas.getAll)
    const relations = app.store()
    app.config('relation', relations.getOrSet)
    app.config('relations', relations.getAll)
    const model = (nameOrBoth, maybeModel) => {
      let name, model
      const hasSeparateModel = typeof maybeModel === 'function'
      if(hasSeparateModel && typeof nameOrBoth === 'string'){
        name = nameOrBoth
        model = maybeModel
      } else if (typeof maybeModel === 'object'){
        name = Object.keys(nameOrBoth)[0],
        model = nameOrBoth[name]
      }
      console.log(`REGISTER MODEL ${name}`)
      // console.log(app.decorators.sequelizeAttributeDecorators)
      app.schema(name, () => {
        return model(app.decorators.sequelizeAttributeDecorators)
      })
      app.relation(name, () => model(app.decorators.sequelizeRelationshipDecorators))
    }
    app.config('model', model)
    const controllers = app.store()
    app.config('controller', controllers.getOrSet)
    app.config('controllers', controllers.getAll)
    const resolver = app.store()

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

    const serializer = (options) => (data) => {
      if (options.with) {
        data = options.with.reduce( (obj, prop) => {
          obj[prop] = data[prop]
          return obj
        }, {})
      }
      if (options.without) {
        options.without.forEach( prop => {
          if (data[prop]) {
            delete data[prop]
          }
        })
      }
	    return data
    }

    const publicUser = serializer({
      without : [ 'password' ],
      with: [
        'id',
        'username',
        'firstName',
        'lastName',
        'description',
      ]
    })

    const api = (options = {}) => {
      let config = {
        route: options.route
      }
      let dataHandler = ($, data) => {
        // $.data.data = data;
        $.data = courseSerializer.serialize(data)
        $.json()
      }
      let json = controller => ($) => {
        // fetchData  then  handleData
        controller($).then( dataHandler.bind(null, $) )
      }
      api.method = (method) => (route, controller) => server[method](options.route + route, json(controller))
      return {
        get: api.method('get'),
        post: api.method('post'),
        put: api.method('put'),
        delete: api.method('delete'),
        patch: api.method('patch')
      }
    }

    let routes = app.store()
    // app.config('route', function(route, view){
    //   routes.getOrSet(this.route || "" + route, view)
    // })
    app.config('route', routes.getOrSet)
    app.config('routes', routes.getAll)

    app.config('api', api({
      route: '/api'
    }))

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
    app.run(function({utils, server, resolve}) {
      resolve()

      server.get('/', ($) => {
        // $.data.message = 'Hello World!!!!'
        // $.data.context = this.constructor.name
        // $.data.r = Object.getOwnPropertyNames(routes)
        // $.data.app = app.constructor.name
        render(m('div.asd.asd')).then((t) => {
          // $.data.template = t
          $.data.class = app.Course
          $.json()
        })
      })
    })

      // .run(['schemas'], ($, schemas) => {
      //   $.run()
      // })

      // .then(() => {
      //   console.log('Connection has been established successfully.')
      // })
      // .catch(err => {
      //   console.error('Unable to connect to the database:', err)
      // })


// force: true will drop the table if it already exists

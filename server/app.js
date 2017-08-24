  // Create an app
    const app = require('moduler')
    const SQL = require('sequelize')
    const diet = require('diet')
    const crossOrigin = require('diet-cross-origin')

    app.module('a', function(){})
    app.module({'b' : function(){}})
    import './modules'

    const server = diet()
    server.header(crossOrigin({
      defaults: {
        origin: '*',
        credentials: true
      }
    }))

    server.listen('http://localhost:8000')

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

    // app.module('setup', function($){

    let models = app.store();
    app.config('model', models.getOrSet);
    app.config('models', models.getAll);
    let relations = app.store();
    app.config('relation', relations.getOrSet);
    app.config('relations', relations.getAll);
    let controllers = app.store();
    app.config('controller', controllers.getOrSet);
    app.config('controllers', controllers.getAll);
    let routes = app.store();
    app.config('route', routes.getOrSet);
    app.config('routes', routes.getAll);

    app.config('chain', function(){
	    return (init) => Array.prototype.reduce.call(arguments, (acc, x) => acc && acc.then ? acc.then(x) : x(acc), init)
    })

    app.modules()
    app.run(function({server, routes}){
      routes();
      server.get('/', ($)=>{
        $.data.message = 'Hello World!!!!'
        $.data.context = this.constructor.name
        $.data.r = Object.getOwnPropertyNames(routes)
        $.data.app = app.constructor.name
        // $.data.isEqual = $ === this
        $.json()
      })
    })

      // .run(['models'], ($, models)=>{
      //   $.run()
      // })

      // .then(() => {
      //   console.log('Connection has been established successfully.');
      // })
      // .catch(err => {
      //   console.error('Unable to connect to the database:', err);
      // });


// force: true will drop the table if it already exists

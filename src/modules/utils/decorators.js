import $ from 'moduler'

import sequelize_decorators from './decorators/sequalize.decorators'
import serializer_decorators from './decorators/serializer.decorators'
import api_controller_decorators from './decorators/api_controller.decorators'

export default function({Q, db}){

  const removeEmptyKeys = (o) => {
    let newObj = {};
    Object.keys(o).forEach(key => {
      let val = o[key];
      if( val != null){
        newObj[key] = val
      }
    })
    return newObj
  }

  function propertyDecorator(fn){
    return function(...params) {
      let descriptor = params[params.length - 1]
      if (
        params.length === 3
        && typeof descriptor === 'object'
        && descriptor.hasOwnProperty('enumerable')
        && descriptor.hasOwnProperty('initializer')
        && descriptor.hasOwnProperty('configurable')
      )
      {
        return fn([], ...params)
      } else {
        return fn.bind(null, params)
      }
    }
  }

  function emptyDecorator(...params){
    let descriptor = params[params.length - 1]
    if (
      params.length === 3
      && typeof descriptor === 'object'
      && descriptor.hasOwnProperty('enumerable')
      && descriptor.hasOwnProperty('initializer')
      && descriptor.hasOwnProperty('configurable')
    ) {
      return null
    } else {
      return function(target, property, descriptor){
        descriptor.initializer = () => null
      }
    }
  }

  const dataType = (type, defaultOptions) => ([options], target, property, descriptor) => {
    descriptor.initializer = () => Object.assign({}, defaultOptions, options, {type})
    return descriptor
  }

  const relationType = (type) => ([options = {}], target, property, descriptor) => {
    descriptor.initializer = function(){
      let schema = $.schemas[target.constructor.name]
      let relation
      if(options.type){
        options.as = $.str.kebab(property)
        relation = $.schemas[options.type]
        delete options.type
      } else {
        relation = $.schemas[property]
      }
      // console.log(`\n\n\n\n\n${schema.name}.${property} = ${schema}.${type}(${relation.name}\n\n\n\n\n`, options)
      schema[property] = schema[type](relation, options)
    }
  }



  const decoratorHelpers  = {
    removeEmptyKeys,
    propertyDecorator,
    emptyDecorator,
    dataType,
    relationType
  }

  // const courseSerializer = new $.jsonapi('course', {
  //     attributes: ['id','title','slug','description','video','image','color','level','author'],
  //     get author() {
  //       return {
  //         ref: 'id',
  //         attributes: ['id', 'username', 'email', 'firstName', 'lastName', 'image', 'description']
  //       }
  //     }
  // })
  //

  // const serializerDecorator =

  // let serializerRelationDecorator = propertyDecorator(([options], target, property, descriptor) => {
  //
  // })


  // let attr = (target, property, descriptor) => {
  //   descriptor.initializer = function(){
  //     this.attributes = this.attributes || []
  //     this.attributes.push(property)
  //     return target.name;
  //   }
  //   return descriptor
  // }
  //

  // let serializer = {
  //   Uuid: dataDecorator('UUID'),
  //   Str: dataDecorator('STRING'),
  // BinaryStr: dataDecorator('STRING'),
  //   Text: dataDecorator('TEXT'),
  //   Bool: dataDecorator("BOOLEAN"),
  //   Int: dataDecorator('INTEGER'),
  //   BigInt: dataDecorator('BIGINT'),
  //   Float: dataDecorator('FLOAT'),
  //   Real: dataDecorator('REAL'),
  //   Dbl: dataDecorator('DOUBLE'),
  //   Dec: dataDecorator('DECIMAL')
  // }


  // let belongsTo = propertyDecorator(([options], target, prop, descriptor) => {
  //   descriptor.initializer = () => i
  //   let i = {}
  //   let t = i.model = target.name // let t = $.model[target.name]
  //   if(!options){
  //     let r = i.target = prop // $.model[prop]
  //     // t[prop] = t.belongsTo(r)
  //     i.option = 'belongsTo'
  //   } else {
  //     let alias = options.useModel
  //     if(alias){
  //       options.as = prop
  //       delete options.useModel
  //     }
  //     let r = i.target = alias || prop
  //     // r = i.target = $.model[alias || prop]
  //     options.relation = 'belongsTo'
  //     i.options = options
  //   }
  // })

  // let { Model, Uuid, Str, Text, Enum, Bool, hasOne } = sequelizeAttributeDecorators

  // class Course {
  //   @Uuid({
  //     primaryKey : true
  //   }) id
  //   @Str() title
  //   @Str() slug
  //   @Text() description
  //   @Str() video
  //   @Str() image
  //   @Enum({
  //     values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
  //     defaultValue: 'default'
  //   }) color
  //   @Enum({
  //     values: [ 'Beginner', 'Intermediate', 'Advanced' ],
  //     defaultValue: 'Beginner'
  //   }) level
  //   @Bool({
  //     defaultValue : false
  //   }) active
  //   @hasOne one
  //   @hasOne({two: 2}) two
  // }
  // const nc = new Course
  //
  // let valid = {
  //   id : {
  //     type: Q.UUID,
  //     primaryKey: true,
  //     defaultValue : Q.UUIDV1
  //   },
  //   title : {
  //     type: Q.STRING
  //   },
  //   slug : {
  //     type: Q.STRING
  //   },
  //   description : {
  //     type: Q.TEXT
  //   },
  //   video : {
  //     type: Q.STRING
  //   },
  //   image : {
  //     type: Q.STRING
  //   },
  //   color : {
  //     type: Q.ENUM,
  //     values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
  //     defaultValue: 'default'
  //   },
  //   level : {
  //     type: Q.ENUM,
  //     values : [ 'Beginner', 'Intermediate', 'Advanced' ],
  //     defaultValue: 'Beginner'
  //   },
  //   active : {
  //     type : Q.BOOLEAN,
  //     defaultValue : false
  //   }
  // }
  // $.config('Course', {nc, valid: Object.assign({}, valid)})

  // ( function({
  //   Model, Uuid, Str, Text, Enum, Bool, belongsTo, hasMany
  // }){
  //   let Course = @Model class {
  //     // @Uuid({
  //     //   primaryKey : true
  //     // }) id
  //     // @Str title
  //     // @Str slug
  //     // @Text description
  //     // @Str video
  //     // @Str image
  //     // @Enum({
  //     //   values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
  //     //   defaultValue: 'default'
  //     // }) color
  //     // @Enum({
  //     //   values : [ 'Beginner', 'Intermediate', 'Advanced' ],
  //     //   defaultValue: 'Beginner'
  //     // }) level
  //     // @Bool({
  //     //   defaultValue : false
  //     // }) active
  //     // // @belongsTo({
  //     // //   type: 'User'
  //     // // }) Author
  //     // // @hasMany Lession
  //   }
  //   $.config('Course', Course);
  // })(sequelizeAttributeDecorators)

  // @Float(11, 12)
  // TestFloat
  let { sequelizeAttributeDecorators, sequelizeRelationshipDecorators } = sequelize_decorators($, decoratorHelpers)
  let serializerDecorators = serializer_decorators($, decoratorHelpers)
  let ApiControllerDecorators = api_controller_decorators($, decoratorHelpers)

  return {
    ApiControllerDecorators,
    sequelizeAttributeDecorators,
    sequelizeRelationshipDecorators,
    serializerDecorators
  }
}

// function Model (target) {
//   target.qwertyb='bsd'
//   return function(...args) {
//     target.qwerty='asd'
//     return {
//       wrappedValue: new target(...args)
//     }
//   }
// }
//

// let attr = (target, property, descriptor) => {
//   // target.attr = target.attr || []
//   // target.attr.push(property)
//   console.log('TARGET', {target})
//   descriptor.initializer = function(){
//     console.log('TARGET2', {target, self: this})
//     this.attr = this.attr || []
//     this.attr.push(property)
//     return target.name;
//   }
//   return descriptor
// }

// function Enum(target, prop, descriptor){
//   target.prototype[prop] = 'Enum'
//   return function()
// }

// let Number = propertyDecorator((options, target, prop, descriptor) => {
//   if(!options) {
//     descriptor.initializer = () => 'Number'
//   } else {
//     options.type = 'Number'
//     descriptor.initializer = () => options
//   }
//   return descriptor
// })
//

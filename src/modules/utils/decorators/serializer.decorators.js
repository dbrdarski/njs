export default function({ Q, db, jsonapi, str }, {
  removeEmptyKeys,
  propertyDecorator,
  emptyDecorator
}){

  const serializerDecoratorsTemplate = (function(store = {}){
    return {
      model: (target) => {
        let schema = store[target.name] = removeEmptyKeys(new target)
        return () => {
          console.log({name: target.name, schema, jsonapi:jsonapi})
          return new jsonapi(str.kebab(target.name), schema)
        }
      },
      attribute: (isRelation, isUuid) => propertyDecorator(([options], target, property, descriptor) => {
        descriptor.initializer = function(){
          this.attributes = this.attributes || []
          this.attributes.push(str.kebab(property))
          if (isRelation) {
            Object.defineProperty(this, str.kebab(property), {
              get: () => store[property] || 'NOT FUKCING READY!!!!',
              enumerable: true
            })
          }
          if (isUuid) {
            this.rel = property
          }
        }
      })
    }
  })()

  const serializerAttributeDecorator = serializerDecoratorsTemplate.attribute(false)
  const serializerRelationDecorator = serializerDecoratorsTemplate.attribute(true)
  const serializerUuidDecorator = serializerDecoratorsTemplate.attribute(false, true)

  const serializerDecorators = {
    Model: serializerDecoratorsTemplate.model,
    Enum: serializerAttributeDecorator,
    Uuid: serializerUuidDecorator,
    Str: serializerAttributeDecorator,
    BinaryStr: serializerAttributeDecorator,
    Text: serializerAttributeDecorator,
    Bool: serializerAttributeDecorator,
    Int: serializerAttributeDecorator,
    BigInt: serializerAttributeDecorator,
    Float: serializerAttributeDecorator,
    Real: serializerAttributeDecorator,
    Dbl: serializerAttributeDecorator,
    Dec: serializerAttributeDecorator,
    hasOne: serializerRelationDecorator,
    belongsTo: serializerRelationDecorator,
    hasMany: serializerRelationDecorator,
    belongsToMany: serializerRelationDecorator,
    Scope: emptyDecorator
  }

  const ApiControllerHandler  = (options, target) => {
    const model = $.models[options.model]
    const attachSerializer = (fn) => {
      fn.serializer = target.defaultSerializer
      return fn
    }
    return {
      index: attachSerializer(() => model.findAll(options.params)),
      show: attachSerializer(({params}) => model.findOne(Object.assign({}, options.params, {
        where : { slug : params.slug },
      }))),
      create: attachSerializer(({query}) => Course.build(query).save()),
      update: attachSerializer(() => true),
      destroy: attachSerializer(() => false),
    }
  }

  const ApiControllerDecorator = (options) => (target) => {
    if ( options.defaultSerializer ){
      target.defaultSerializer = $.models[options.model].defaultSerializer
    }
    return Object.assign({}, ApiControllerHandler(options, target), new target)
  }

  const ApiControllerDecorators = {
    serializer: propertyDecorator(([serializer], target, property, descriptor) => {
      descriptor.value.serializer = serializer || target.defaultSerializer
    }),
    ApiController: ApiControllerDecorator
  }

  return serializerDecorators
}

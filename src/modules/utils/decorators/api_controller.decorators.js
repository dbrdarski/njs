export default function({ Q, db, models }, {
  removeEmptyKeys,
  propertyDecorator,
  emptyDecorator
}){
  const ApiControllerHandler  = (options, target) => {
    const model = models[options.model]
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
      target.defaultSerializer = models[options.model].defaultSerializer
    }
    return Object.assign({}, ApiControllerHandler(options, target), new target)
  }

  const ApiControllerDecorators = {
    ApiController: ApiControllerDecorator,
    serializer: propertyDecorator(([serializer], target, property, descriptor) => {
      descriptor.value.serializer = serializer || target.defaultSerializer
    })
  }
  return ApiControllerDecorators
}

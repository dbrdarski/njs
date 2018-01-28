export default function CourseCtrl({
  models: { Course },
  decorators: {
    ApiControllerDecorators: {
      ApiController
    }
  }
}){

  let ctrl = @ApiController({
    model: 'Course',
    defaultSerializer: 'Course',
    params: {
      include : [Course.Author]
    }

    // ,
    // defaultActions: ['index', 'edit', 'create', 'show', 'update', 'destroy']
  }) class Course {
  //
  //   index = ({Course}) => Course.findAll({
  //     include: [Course.Author]
  //   })
  //
  //   @serialize()
  //   edit({}){
  //
  //   }
  //
  //   create($){
  //
  //   }
  //
  //   @default edit
  //
  //
  }

  console.log({ctrl})
  return ctrl
  //
  // return {
  //   index : function($){
  //     return Course.findAll({
  //       include : [Course.Author]
  //     })
  //   },
  //   edit : function($){
  //     return Course.findOne({
  //       where : {
  //         slug : $.params.slug
  //       },
  //       include : [Course.Author]
  //     })
  //   },
  //   new : function($){
  //     return new Promise((resolve, reject) => resolve(new Course))
  //   },
  //   create : function($){
  //     var course = Course.build($.query)
  //     return course.save()
  //   },
  //   install : function($){
  //     Course.sync({force: true})
  //     $.data.msg = {installed: 'courses table'}
  //     $.json()
  //   }
  // }
}

// function ApiController(){}
// function ActiveModelSerializer(){}
//
// let serializer = {
//   attributes: ['id', 'asdf'],
//   relations: {
//     allow: ['lessions'],
//     include: ['author']
//   }
// };
//
// @ApiController({
//   model: 'Course',
//   endpoints: true
// }) class Course {
//   @ActiveModelSerializer(serializer)
//   @Include('Author')
//   index
//   // new
//   @ActiveModelSerializer
//   create
//
//   show
//   // edit
//   update
//   destroy
// }

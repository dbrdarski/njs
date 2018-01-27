export default function CourseCtrl({
  models: { Course }
}){

  return {
    index : function(){
      return Course.findAll({
        include : [Course.Author]
      })
    },
    edit : function($){
      return Course.findOne({
        where : {
          slug : $.params.slug
        },
        include : [Course.Author]
      })
    },
    new : function($){
      return new Promise((resolve, reject) => resolve(new Course))
    },
    create : function($){
      var course = Course.build($.query)
      return course.save()
    },
    install : function($){
      Course.sync({force: true})
      $.data.msg = {installed: 'courses table'}
      $.json()
    }
  }
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

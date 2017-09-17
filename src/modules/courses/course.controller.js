export default function CourseCtrl({
  models: { Course }
}){
  // let { Course } = $.models
  this.relations.Course
  return {
    index : function(){
      return Course.findAll({
        include : Course.Author
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
      var course = Course.build($.query)
      $.data.msg = $.query
      course.save()
      $.json()
    },
    install : function($){
      Course.sync({force: true})
      $.data.msg = {installed: 'courses table'}
      $.json()
    }
  }
}

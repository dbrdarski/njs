export default function CourseCtrl({
  models: { Course }
}){
  // let { Course } = $.models
  this.relations.Course
  return {
    index : function(){
      // console.log('qwerty')
      return Course.findAll({
        include : Course.Author
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

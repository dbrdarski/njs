export default function CourseCtrl($){
  let { Course } = $.models
  this.relations.Course
  return {
    index : function($){
      Course.findAll({
        include : Course.Author
      }).then(courses => {
        $.data.message = 'Hello World!!!!'
        $.data.courses = courses
        $.data.body = $.body
        $.json()
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

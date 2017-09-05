export default function CourseCtrl({
  m, render, baseTemplate,
  models: { Course },
  components: { Page2 }
}){
  // let { Course } = $.models
  this.relations.Course
  return {
    indexPost : function($){
      Course.findAll({
        include : Course.Author
      }).then(courses => {
        $.data.message = 'Hello World!!!!'
        $.data.courses = courses
        $.data.body = $.body
        $.json()
      })
    },
    index : function($){
      Course.findAll({
        include : Course.Author
      }).then(courses => {
        return render(m(Page2, courses)).then((t)=>{
          $.header('content-type', 'text/html')
          $.send(baseTemplate.replace('<!--body-->', t))
          $.end()
        })
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

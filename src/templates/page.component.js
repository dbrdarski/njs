export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  let Courses = {
    list: [],
    loadList: function() {
      return m.request({
        method: "GET",
        url: "http://localhost:8000/courses",
        withCredentials: false
      })
      .then(function(result) {
        Courses.list = result.courses
      })
    },
  }
  return {
    oninit: Courses.loadList,
    view: function() {
      return m('div', [
        m(Topbar),
        m(Content,
          Courses.list.map(
            ( course ) => m( CourseItem, course )
          )
        )
      ])
    }
  }
}

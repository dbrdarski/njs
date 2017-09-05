export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  let Courses = {
    list: []
  }  
  return {
    // oninit: Courses.loadList,
    view: function(vnode) {
      // console.log(vnode.children)
      return m('div', [
        m(Topbar),
        m(Content,
          vnode.children.map(
            ( course ) => m( CourseItem, course )
          )
        )
      ])
    }
  }
}

export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  return {
    view: function(vnode) {
      return m('div', [
        m(Topbar),
        m(Content,
          m( CourseItem, vnode.attrs.data )
        )
      ])
    }
  }
}

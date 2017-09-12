export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  return {
    view: function(vnode) {
      return m('div', [
        m(Topbar),
        m(Content,
          vnode.attrs.items.map(
            ( course ) => m( CourseItem, course )
          )
        )
      ])
    }
  }
}

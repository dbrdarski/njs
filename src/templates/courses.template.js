export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  return {
    view: function(vnode) {
      console.log(vnode.attrs);
      return m('div', [
        m(Topbar),
        m(Content,
          vnode.attrs.data.map(
            ( course ) => m( CourseItem, course )
          )
        )
      ])
    }
  }
}

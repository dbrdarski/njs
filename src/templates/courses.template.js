export default function({
  m, components : { Topbar, Content, CourseItem }
}){
  return {
    view: function(vnode) {
      console.log(vnode.attrs);
      return m('div', [
        m(Topbar),
        m(
          Content, {
            title: "Browse our courses..."
          },
          vnode.attrs.data.map(
            ( course ) => m(
              '.col-sm-6.col-md-4.col-lg-3',
              m( CourseItem, course )
            )
          )
        )
      ])
    }
  }
}

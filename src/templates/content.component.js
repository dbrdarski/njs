export default function({m}){
  return {
    view: function(vnode) {
      return m(
        '.container', [
          m(
            'h1.punchline', vnode.attrs.title
          ),
          m('.row', vnode.children)
        ]
      )
    }
  }
}

export default function({m}){
  return {
    view: function(vnode) {
      return m(
        '.container', [
          m(
            'h1.punchline', "Browse our courses..."
          ),
          m('.row', vnode.children)
        ]
      )
    }
  }
}

export default function({
  _, m, slugify,
  components : { Topbar, Content, CourseItem }
}){
  var stateModel = _.once((data)=>{
    console.log(data)
    let state = {
      title: data.title,
      customSlug: data.slug,
      description: data.description,
      setDescription: function(v){
        state.description = v
      },
      setTitle: function(v) {
        state.title = v
      },
      setSlug: function(v) {
        state.customSlug = slugify(v)
      }
    }
    Object.defineProperty(state, 'slug', {
      get: () => state.customSlug || slugify(state.title)
    })
    return state
  })  
  return {
    view: function(vnode) {
      let item = stateModel(vnode.attrs.data);
      return m('div', [
        m(Topbar),
        m(Content, {
            title: "Edit course"
          }, [
          m('#main-panel.col-md-9', [
            m('input[type="text"].form-control.form-control-lg[id="title"][name="title"][aria-describedby="couseTitle"][placeholder="Title"]', {
              oninput: m.withAttr("value", item.setTitle),
              value: item.title
            }),
            m('small#couseTitle.form-text.text-muted', "We'll never share your email with anyone else."),
            m('input[type="text"].form-control.form-control-sm', {
              value: item.slug,
              onchange: m.withAttr("value", item.setSlug)
            }),
            m('.form-section-meta', [
              m('.form-group', [
                m('label[for="description"]', 'Description'),
                m('textarea#description.form-control[name="description"]', {
                  value: item.description,
                  oninput: m.withAttr("value", item.setDescription)
                }),
              ]),
              m('.row',[
                m('.col-md-4',
                  m('select.form-control', ['Beginner', 'Intermediate', 'Advanced'].map((items)=>m('option', items)))
                ),
                m('.col-md-4',
                  m('select.form-control', ['Red', 'Orange', 'Blue'].map((items)=>m('option', items)))
                ),
                m('.col-md-4',
                  m('input[type="text"].form-control')
                )
              ])
            ]),
            m('a.btn.btn-primary.btn-lg[href="/courses"]', {
              oncreate: m.route.link
            }, 'Click here!!!!')
          ]),
          m('#side-panel.col-md-3',
            m( CourseItem, vnode.attrs.data )
          )
        ])
      ])
    }
  }
}

export default function({
  _, m, slugify,
  components : { Topbar, Content, CourseItem }
}){
  var xetter = (state) => (prop, xettings) => (value) => {
    if(value != null){
      state[prop] = value
    }
    return state[prop]
  }
  var model = _.once((data) => {
    let x = xetter(data)
    return {
        title: x('title'),
        slug: x('slug', {
          // set: [ slugify ],
          // get: [ ( state ) => state.slug || slugify( state.title() ) ]
        }),
        description: x('description'),
        num: x('num')
    }
  })
  var stateModel = _.once((data) => {
    console.log(data)
    let state = {
      $: {
        colors: ['Red', 'Orange', 'Blue'],
        levels: ['Beginner', 'Intermediate', 'Advanced']
      },
      $$: {
        title: function(v) {
          state.title = v
        },
        slug: function(v) {
          state.customSlug = slugify(v)
        },
        description: function(v) {
          state.description = v
        },
        num: function(v) {
          console.log([v])
          state.num = v
        }
      },
      title: data.title,
      customSlug: data.slug,
      description: data.description,
      num: null
    }
    Object.defineProperty(state, 'slug', {
      get: () => state.customSlug || slugify(state.title)
    })
    return state
  })
  return {
    view: function(vnode) {
      let item2 = stateModel(vnode.attrs.data);
      let item = model(vnode.attrs.data);
      return m('div', [
        m(Topbar),
        m(Content, {
            title: "Edit course"
          }, [
          m('#main-panel.col-md-9', [
            m('input[type="text"].form-control.form-control-lg[id="title"][name="title"][aria-describedby="couseTitle"][placeholder="Title"]', {
              value: item.title(),
              oninput: m.withAttr("value", item.title)
            }),
            m('small#couseTitle.form-text.text-muted', "We'll never share your email with anyone else."),
            m('input[type="text"].form-control.form-control-sm', {
              value: item.slug(),
              onchange: m.withAttr("value", item.slug)
            }),
            m('.form-section-meta', [
              m('.form-group', [
                m('label[for="description"]', 'Description'),
                m('textarea#description.form-control[name="description"]', {
                  value: item.description(),
                  oninput: m.withAttr("value", item.description)
                }),
              ]),
              m('.row',[
                m('.col-md-4',
                  m('select.form-control', item2.$.levels.map((items)=>m('option', items)))
                ),
                m('.col-md-4',
                  m('select.form-control', item2.$.colors.map((items)=>m('option', items)))
                ),
                m('.col-md-4',
                  m('input[type="text"].form-control', {
                    value: item.num(),
                    oninput: m.withAttr("value", item.num)
                  })
                )
              ])
            ]),
            m('a.btn.btn-primary.btn-lg[href="/courses"]', {
              oncreate: m.route.link
            }, 'Click here!!!!')
          ]),
          m('#side-panel.col-md-3', [
            m( '.buttons', [
              m('.btn.btn-primary.btn-alt.btn-lg',  "Save"),
              m('.btn.btn-primary.btn-lg',  "Unpublish")
            ]),
            m( CourseItem, vnode.attrs.data )
          ])
        ])
      ])
    }
  }
}

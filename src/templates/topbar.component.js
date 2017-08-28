import './topbar.less'
export default function({m}){
  return {
    view: function() {
      return m("header#header",
        m("div.container",
          m("div.row", [
            m("div.col-sm-3.logo",
              m("a#logo", {href:"/"})
            ),
            m("div.col-sm-9.navigation",
              m("nav", {role: "navigation"},
                m("ul.menu",
                  m("li.nav-item",
                    m('a', {href : "/signin"}, 'Login')
                  ),
                  m("li.nav-item",
                    m('a', {href : "/signup"}, 'Sign up')
                  )
                )
              )
            )
          ])
        )
      )
    }
  }
}

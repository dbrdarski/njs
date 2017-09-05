import './course-item.less'
export default function({m}){
  return {
    view: function({attrs}) {
      return m(
        '.col-sm-6.col-md-4.col-lg-3', m(
          '.course', [m(
            'a.thumb', {bg: attrs.color, href:attrs.id}, [
              m(".thumb-img", {
                bg : attrs.color,
                style : {
                  backgroundImage : `url(/uploads/courses/${attrs.image})`
                }
              }),
              m("h2.name",
                m("span", attrs.title)
              )
            ]
          ),
          m(
            '.inner', m(
              'ul', [
                m(
                  "li.description",
                  attrs.description
                ),
                m(
                  "li.author",
                  ['by ', m(
                    'a', { href : attrs.author.id },`${attrs.author.firstName} ${attrs.author.lastName}`
                  )]
                ),
                m(
                  "li.level",
                  `Level: ${attrs.level}`
                )
            ])
          )
        ])
      )
    }
  }
}

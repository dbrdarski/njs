import './topbar.less'
export default function({m}){
  return {
    view: function() {
      return m(
        'h4', 'This is a title'
      )
    }
  }
}

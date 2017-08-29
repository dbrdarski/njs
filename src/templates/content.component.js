import './topbar.less'
export default function({m}){
  return {
    view: function() {
      return m(
        'h1', 'Hello darkness my old friend'
      )
    }
  }
}

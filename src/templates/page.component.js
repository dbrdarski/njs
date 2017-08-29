export default function({
  m, components : { Navbar, Content }
}){  
  return {
    view: function() {
      return [
        m(Navbar),
        m(Content)
      ]
    }
  }
}

export default function({
  m, components : { Navbar }
}){
  console.log(Navbar)
  return {
    view: function() {
      return m(Navbar)
    }
  }
}

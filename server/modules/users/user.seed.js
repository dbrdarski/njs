export default function( $ ){
  let { User, Role } = $.models;

  $.chain(
    ( ) => (Role.build({
  		name : 'admin',
  		description : 'Administrator'
  	}).save()),
    (administrator) => {
      var admin = new User()
      admin.setRole(administrator, {save: false})
      admin.username = 'admin'
      admin.email = 'admin@course.plus'
      admin.firstName = 'Dane'
      admin.lastName = 'Brdarski'
      admin.password = 'qwertybanana'
      admin.image = 'dane.jpg'
      admin.description = 'All-seeing, All-knowing. The Admin.'
      admin.save()
  	}
  )()
  $.chain(
    () => (Role.build({
  		name : 'student',
  		description : 'Student'
  	}).save()),
    (student) => {
      let pepe = new User()
      pepe.setRole(student, {save: false})
      pepe.username = 'student'
      pepe.email = 'student@course.plus'
      pepe.firstName = 'Pepe'
      pepe.lastName = 'Biserov'
      pepe.password = 'qwertybanana'
      pepe.save()
    }
  )()
  Role.create({
    name : 'lecturer',
    description : 'Lecturer'
  })
}

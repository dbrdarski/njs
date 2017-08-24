export default function( $ ){
  let { User, Role } = $.models;

  $.chain(
    ( ) => (Role.build({
  		name : 'admin',
  		description : 'Administrator'
  	}).save()),
    (admin) => (User.build({
      username : 'admin',
      email : 'admin@course.plus',
      firstName : 'Dane',
      lastName : 'Brdarski',
      password : 'qwertybanana',
      image : 'dane.jpg',
      description : 'All-seeing, All-knowing. The Admin.'
  	}).save()).then(s=>s.setRole(admin))
  )()
  $.chain(
    () => (Role.build({
  		name : 'student',
  		description : 'Student'
  	}).save()),
    (student) => (User.build({
      username : 'student',
      email : 'student@course.plus',
      firstName : 'Pepe',
      lastName : 'Biserov',
      password : 'qwertybanana'
  	}).save()).then(s=>s.setRole(student))
  )()
  Role.create({
    name : 'lecturer',
    description : 'Lecturer'
  })
  // pepe.setRole(student)


  // .then((admin)=>{
  //   console.log([admin])
  //   console.log(['SetRooooooooooooooooooooleeeeeeeeeeeeeeeee', admin.setRole, admin.setRoles])
  //   admin.setRole(administrator)
  // })
  // admin.setRole(administrator)
  // admin.save()

  // let pepe = User.create({
  //   username : 'student',
  //   email : 'student@course.plus',
  //   firstName : 'Pepe',
  //   lastName : 'Biserov',
  //   password : 'qwertybanana'
	// })

  // pepe.setRole(student)
  // pepe.save()
}

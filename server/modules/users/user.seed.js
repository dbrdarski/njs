export default function( User, Role ){

  function chain(){
      return Array.prototype.reduce.call(arguments, (acc, x)=>{
        return acc ? acc.then(x) : x();
      })
  }

  let administrator = Role.build({
		name : 'admin',
		description : 'Administrator'
	})

  administrator.save().then((a)=>{
    console.log(["AAAAAAAAAAADDDMIIIIIIIIIIIIIIIIIIIIIIIIN", a])
    let admin = User.build({
      username : 'admin',
      email : 'admin@course.plus',
      firstName : 'Dane',
      lastName : 'Brdarski',
      password : 'qwertybanana',
      image : 'dane.jpg',
      description : 'All-seeing, All-knowing. The Admin.'
  	})

    admin.setRole(a)
  })

	Role.create({
		name : 'lecturer',
		description : 'Lecturer'
	})

  let student = Role.build({
		name : 'student',
		description : 'Student'
	})

  student.save()


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

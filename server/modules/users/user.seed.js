export default function( $ ){
  let { User, Role, Course } = $.models;

  $.chain(
    ( ) => ( Role.build({
  		name : 'admin',
  		description : 'Administrator'
  	}).save() ),
    (administrator) => {
      var admin = new User
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
    () => ( Role.build({
  		name : 'student',
  		description : 'Student'
  	}).save() ),
    (student) => {
      let pepe = new User
      pepe.setRole(student, {save: false})
      pepe.username = 'student'
      pepe.email = 'student@course.plus'
      pepe.firstName = 'Pepe'
      pepe.lastName = 'Biserov'
      pepe.password = 'qwertybanana'
      pepe.save()
    }
  )()
  $.chain(
    () => ( Role.build({
      name : 'lecturer',
      description : 'Lecturer'
    }).save() ),
    (lecturer) => {
      let dane = new User
      dane.setRole(lecturer, {save: false})
      dane.username = 'dane'
      dane.email = 'dane@course.plus'
      dane.firstName = 'Dane'
      dane.lastName = 'Brdarski'
      dane.password = 'qwertybanana'
      dane.image = 'dane.jpg'
      dane.description = 'Dane is a front end developer at Schilling and the author of this awesome app. His expertese ranges from design, HTML, CSS, JavaScript, Angular and more recently some PHP.'
      dane.save()

      let alex = new User
      alex.setRole(lecturer, {save: false})
      alex.username = 'alex'
      alex.email = 'alex@course.plus'
      alex.firstName = 'Alex'
      alex.lastName = 'Pffeipher'
      alex.password = 'qwertybanana'
      alex.image = 'alex.jpg'
      alex.description = 'Alex is the Founder & CEO of Wayward Wild, a media incubator and content studio helping young websites, podcasts, web series, and publications stay true to their DNA.'
      alex.save()
        .then((alex)=>{
          let course = new Course
          course.setAuthor(alex, {save: false})
          course.title = 'Laravel 101',
          course.slug = 'laravel-101',
          course.description = 'Dive into the Laravel essentials with this course by one of the core contributors.',
          course.level = 1,
          course.color = 1,
          course.image = 'laravel.png',
          course.video = 'lnf1GdNxDbc'
          course.save()
        })

      let kirby = new User
      kirby.setRole(lecturer, {save: false})
      kirby.username = 'kirby'
      kirby.email = 'kirby@course.plus'
      kirby.firstName = 'Kirby'
      kirby.lastName = 'Jones'
      kirby.password = 'qwertybanana'
      kirby.image = 'kirby.jpg'
      kirby.description = 'Kirby Jones is a San Francisco based fine artist whose projects have received international attention. The 1000 Journals Project, launched in 2000, has been exhibited at the San Francisco Museum of Modern Art and the Skirball Cultural Center in Los Angeles.'
      kirby.save()

      let larry = new User
      larry.setRole(lecturer, {save: false})
      larry.username = 'larry'
      larry.email = 'larry@course.plus'
      larry.firstName = 'Kirby'
      larry.lastName = 'Jones'
      larry.password = 'qwertybanana'
      larry.image = 'larry.jpg'
      larry.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.'
      larry.save()
    }
  )()
}

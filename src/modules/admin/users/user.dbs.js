export default function( $ ){
  let { User, Role, Course } = $.schemas;

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
          let laravel = new Course
          laravel.setAuthor(alex, {save: false})
          laravel.title = 'Laravel 101',
          laravel.slug = 'laravel-101',
          laravel.description = 'Dive into the Laravel essentials with this laravel by one of the core contributors.',
          laravel.level = 'Beginner',
          laravel.color = 'red',
          laravel.image = 'laravel.png',
          laravel.video = 'lnf1GdNxDbc'
          laravel.save()
          let lara401 = new Course
          lara401.setAuthor(alex, {save: false})
          lara401.title = 'Laravel 401'
          lara401.slug = 'laravel-401'
          lara401.description = 'Dive into the Laravel essentials with this course by one of the core contributors.'
          lara401.level = 'Intermediate'
          lara401.color = 'orange'
          lara401.image = 'grunt.png'
          lara401.save()
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
      kirby.save().then((kirby)=>{
        let sass = new Course
        sass.setAuthor(kirby, {save: false})
        sass.title = 'SaSS is awesome!'
        sass.slug = 'sass-is-awesome'
        sass.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.'
        sass.level = 'Intermediate'
        sass.color = 'violet'
        sass.image = 'sass.png'
        sass.save()
        let zurb = new Course
        zurb.setAuthor(kirby, {save: false})
        zurb.title = 'ZURB Foudation Fundamentals'
        zurb.slug = 'zurb-foudation-fundamentals'
        zurb.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.'
        zurb.level = 'Beginner'
        zurb.color = 'cyan'
        zurb.image = 'zurb.png'
        zurb.save()
      })

      let larry = new User
      larry.setRole(lecturer, {save: false})
      larry.username = 'larry'
      larry.email = 'larry@course.plus'
      larry.firstName = 'Kirby'
      larry.lastName = 'Jones'
      larry.password = 'qwertybanana'
      larry.image = 'larry.jpg'
      larry.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.'
      larry.save().then(()=>{
        let ng = new Course
        ng.setAuthor(jack, {save: false})
        ng.title = 'Angular Pet Shop'
        ng.slug = 'angular-pet-shop'
        ng.description = 'Build your first Angular app. Dive into the most popular application framework developed by Google.'
        ng.level = 'Advanced'
        ng.color = 'orange'
        ng.image = 'angular.png'
        ng.save()
        let ng2 = new Course
        ng2.setAuthor(jack, {save: false})
        ng2.title = 'Advanced Angular Directives'
        ng2.slug = 'advanced-angular-directives'
        ng2.description = 'This course will teach you everything you need to know about directives in Angular.'
        ng2.level = 'Advanced'
        ng2.color = 'yellow'
        ng2.image = 'angular.png'
        ng2.save()
      })

      let jack = new User
      jack.setRole(lecturer, {save: false})
      jack.username = 'jack'
      jack.email = 'jack@course.plus'
      jack.firstName = 'Kirby'
      jack.lastName = 'Jones'
      jack.password = 'qwertybanana'
      jack.image = 'jack.jpg'
      jack.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.'
      jack.save().then((jack)=>{
        let laravel = new Course
        laravel.setAuthor(jack, {save: false})
        laravel.title='Laravel Database Essentials'
        laravel.slug='laravel-database-essentials'
        laravel.description='Learn how take advantage of Laravel\'s built in model classes, model builder and migration manager.'
        laravel.level='Intermediate'
        laravel.color='yellow'
        laravel.image='database.png'
        laravel.save()
        let temps = new Course
        temps.setAuthor(jack, {save: false})
        temps.title = 'Laravel Templates'
        temps.slug = 'laravel-templates'
        temps.description = 'Laravel templating done right. Authored by the godfather of Laravel\'s own Blade templating engine.'
        temps.level = 'Intermediate'
        temps.color = 'violet'
        temps.image = 'laravel.png'
        temps.save()
      })
    }
  )()
}

export default function({
  chain,
  schemas: { User, Role, Course, Permission, Lession },
  relations
}, $){
  relations()
  chain(
    () => {
      $.data.start = 'true'
      let tables = [ User, Role, Course, Permission, Lession ]
      let pro = Promise.all(
        tables.map(
          (table) => table.sync({
            force: true
          })
        )
      )
      // data.pro = pro
      // console.log("\n\n\n\n\n\n\n\n\n\n")
      // console.log(pro)
      // console.log("\n\n\n\n\n\n\n\n\n\n")
      // $.json()
      return pro.then((x)=>{
        console.log(x); return x
      })
    },
    () => {
      $.data.sync = 'done'
      $.json()
      return Promise.all([
        Permission.create({
            name : 'manageUsers',
            description : 'Manage Users'
        }),
        Permission.create({
            name : 'manageCourses',
            description : 'Manage Courses'
        }),
        Permission.create({
            name : 'listenCourses',
            description : 'Listen Courses'
        })
      ])
    },
    () => (
      Promise.all([
        Role.build({
          name : 'admin',
          description : 'Administrator'
        }).save(),
        Role.build({
          name : 'student',
          description : 'Student'
        }).save(),
        Role.build({
          name : 'lecturer',
          description : 'Lecturer'
        }).save()

      ])
    ),

    ([administrator, student, lecturer]) => {
      $.data.roles = [administrator, student, lecturer]
      var admin = new User
      admin.setRole(administrator, {save: false})
      admin.username = 'admin'
      admin.email = 'admin@course.plus'
      admin.firstName = 'Dane'
      admin.lastName = 'Brdarski'
      admin.password = 'qwertybanana'
      admin.image = 'dane.jpg'
      admin.description = 'All-seeing, All-knowing. The Admin.'

      let pepe = new User
      pepe.setRole(student, {save: false})
      pepe.username = 'student'
      pepe.email = 'student@course.plus'
      pepe.firstName = 'Pepe'
      pepe.lastName = 'Biserov'
      pepe.password = 'qwertybanana'

      let dane = new User
      dane.setRole(lecturer, {save: false})
      dane.username = 'dane'
      dane.email = 'dane@course.plus'
      dane.firstName = 'Dane'
      dane.lastName = 'Brdarski'
      dane.password = 'qwertybanana'
      dane.image = 'dane.jpg'
      dane.description = 'Dane is a front end developer at Schilling and the author of this awesome app. His expertese ranges from design, HTML, CSS, JavaScript, Angular and more recently some PHP.'

      let alex = new User
      alex.setRole(lecturer, {save: false})
      alex.username = 'alex'
      alex.email = 'alex@course.plus'
      alex.firstName = 'Alex'
      alex.lastName = 'Pffeipher'
      alex.password = 'qwertybanana'
      alex.image = 'alex.jpg'
      alex.description = 'Alex is the Founder & CEO of Wayward Wild, a media incubator and content studio helping young websites, podcasts, web series, and publications stay true to their DNA.'

      let kirby = new User
      kirby.setRole(lecturer, {save: false})
      kirby.username = 'kirby'
      kirby.email = 'kirby@course.plus'
      kirby.firstName = 'Kirby'
      kirby.lastName = 'Jones'
      kirby.password = 'qwertybanana'
      kirby.image = 'kirby.jpg'
      kirby.description = 'Kirby Jones is a San Francisco based fine artist whose projects have received international attention. The 1000 Journals Project, launched in 2000, has been exhibited at the San Francisco Museum of Modern Art and the Skirball Cultural Center in Los Angeles.'

      let larry = new User
      larry.setRole(lecturer, {save: false})
      larry.username = 'larry'
      larry.email = 'larry@course.plus'
      larry.firstName = 'Kirby'
      larry.lastName = 'Jones'
      larry.password = 'qwertybanana'
      larry.image = 'larry.jpg'
      larry.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.'

      let jack = new User
      jack.setRole(lecturer, {save: false})
      jack.username = 'jack'
      jack.email = 'jack@course.plus'
      jack.firstName = 'Kirby'
      jack.lastName = 'Jones'
      jack.password = 'qwertybanana'
      jack.image = 'jack.jpg'
      jack.description = 'Larry Smith is a veteran software developer and designer. Once upon a time, he was the co-founder and CEO of Virb (2007-2013), a DIY website builder for creatives which was acquired by GoDaddy in late 2013. He’s on twitter at @LarryTheSmith.'

      return Promise.all(
        [ admin, pepe, dane, alex, kirby, larry, jack ].map(
          (user) => user.save()
        )
      )
    },

  ([ admin, pepe, dane, alex, kirby, larry, jack ]) => {
    $.data.users = [ admin, pepe, dane, alex, kirby, larry, jack ]
    let laravel = new Course
    laravel.setAuthor(alex, {save: false})
    laravel.title = 'Laravel 101',
    laravel.slug = 'laravel-101',
    laravel.description = 'Dive into the Laravel essentials with this laravel by one of the core contributors.',
    laravel.level = 'Beginner',
    laravel.color = 'red',
    laravel.image = 'laravel.png',
    laravel.video = 'lnf1GdNxDbc'

    let lara401 = new Course
    lara401.setAuthor(alex, {save: false})
    lara401.title = 'Laravel 401'
    lara401.slug = 'laravel-401'
    lara401.description = 'Dive into the Laravel essentials with this course by one of the core contributors.'
    lara401.level = 'Intermediate'
    lara401.color = 'orange'
    lara401.image = 'grunt.png'

    let sass = new Course
    sass.setAuthor(kirby, {save: false})
    sass.title = 'SaSS is awesome!'
    sass.slug = 'sass-is-awesome'
    sass.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.'
    sass.level = 'Intermediate'
    sass.color = 'violet'
    sass.image = 'sass.png'

    let zurb = new Course
    zurb.setAuthor(kirby, {save: false})
    zurb.title = 'ZURB Foudation Fundamentals'
    zurb.slug = 'zurb-foudation-fundamentals'
    zurb.description = 'Build responsive websites with one of the most advanced front end mobile frameworks.'
    zurb.level = 'Beginner'
    zurb.color = 'cyan'
    zurb.image = 'zurb.png'

    let ng = new Course
    ng.setAuthor(larry, {save: false})
    ng.title = 'Angular Pet Shop'
    ng.slug = 'angular-pet-shop'
    ng.description = 'Build your first Angular app. Dive into the most popular application framework developed by Google.'
    ng.level = 'Advanced'
    ng.color = 'orange'
    ng.image = 'angular.png'

    let ng2 = new Course
    ng2.setAuthor(larry, {save: false})
    ng2.title = 'Advanced Angular Directives'
    ng2.slug = 'advanced-angular-directives'
    ng2.description = 'This course will teach you everything you need to know about directives in Angular.'
    ng2.level = 'Advanced'
    ng2.color = 'yellow'
    ng2.image = 'angular.png'

    let laravelDB = new Course
    laravelDB.setAuthor(jack, {save: false})
    laravelDB.title='Laravel Database Essentials'
    laravelDB.slug='laravel-database-essentials'
    laravelDB.description='Learn how take advantage of Laravel\'s built in model classes, model builder and migration manager.'
    laravelDB.level='Intermediate'
    laravelDB.color='yellow'
    laravelDB.image='database.png'

    let temps = new Course
    temps.setAuthor(jack, {save: false})
    temps.title = 'Laravel Templates'
    temps.slug = 'laravel-templates'
    temps.description = 'Laravel templating done right. Authored by the godfather of Laravel\'s own Blade templating engine.'
    temps.level = 'Intermediate'
    temps.color = 'violet'
    temps.image = 'laravel.png'

    [ laravel, lara401, sass, zurb, ng, ng2, laravelDB, temps ].map(
      (course) => course.save().then($.json)
    )
  })()
}

export default function( Permission ){
	Permission.create({
		name : 'manageUsers',
		description : 'Manage Users'
	})
	Permission.create({
		name : 'manageCourses',
		description : 'Manage Courses'
	})
	Permission.create({
		name : 'listenCourses',
		description : 'Listen Courses'
	})
}

export default function({models: { User, Course, Lession }}){
  Course.Author = Course.belongsTo(User, {as: 'author'})		// owner (lecturer)
	// Course.Student = Course.belongsToMany(User, { through: User })	// students
  Course.Lession = Course.hasMany(Lession)
}

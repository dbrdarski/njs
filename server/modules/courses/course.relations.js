export default function({models: { User, Course, Lession }}){
  Course.belongsTo(User, {as: 'Author', foreignKey: 'AuthorId'})		// owner (lecturer)
	Course.belongsToMany(User, { through: User })	// students
  Course.hasMany(Lession)
}

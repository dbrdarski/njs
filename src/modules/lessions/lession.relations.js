export default function({schemas: { Lession, User, Course, LessionUser }}){
	Lession.belongsTo(Course)
  // Lession.belongsToMany(User)
}

export default function({models: { Lession, User, Course, LessionUser }}){
	Lession.belongsTo(Course)
  // Lession.belongsToMany(User)
}

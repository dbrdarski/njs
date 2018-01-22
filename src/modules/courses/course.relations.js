export default function({schemas: { User, Course, Lession }}){
  Course.Author = Course.belongsTo(User, {as: 'author'})		// owner (lecturer)
	// Course.Student = Course.belongsToMany(User, { through: User })	// students
  Course.Lession = Course.hasMany(Lession)
}

// let schema = schemas[target.name];
// let relation = schemas[options && options.type || property]
// schema[property] = schema[relation](relation, map())

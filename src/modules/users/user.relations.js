export default function({
  models: { User, Course, Role }
}){
  User.Courses = User.hasMany(Course, {
    as: 'courses', foreignKey: 'authorId'
  })
  User.Role = User.belongsTo(Role, {
    as: "role"
  })
}

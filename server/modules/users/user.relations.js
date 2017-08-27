export default function({
  models: { User, Course, Role }
}){
  User.Courses = User.hasMany(Course, {
    as: 'author'
  })
  User.Role = User.belongsTo(Role, {
    as: "role"
  })
}

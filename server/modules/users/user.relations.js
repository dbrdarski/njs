export default function({
  models: { User, Course, Role }
}){
  User.Courses = User.hasMany(Course)
  User.Role = User.belongsTo(Role, {
    as: "Role"    
  })
  return true
}

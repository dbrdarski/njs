export default function({
  Model, Uuid, Enum, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany
}){
  return @Model class Role{
    @Uuid id
    @Str({unique: true}) name
    @Str description

    @belongsToMany({
      through: 'RolePermission'
    }) Permission

    @hasMany User

  }
}


// Role.Permission = Role.belongsToMany(Permission, { through: RolePermission })
// Role.User = Role.hasMany(User)

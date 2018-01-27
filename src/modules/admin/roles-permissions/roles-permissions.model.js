export default function({
  Model, Uuid, Enum, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany
}){
  return @Model class RolePermission{
    @Uuid id
  }
}

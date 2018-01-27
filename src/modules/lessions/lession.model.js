export default function({
  Model, Uuid, Enum, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany
}){
  return @Model class Lession {
    @Uuid id
    @Str title
    @Str slug
    @Text description
    @Str video
    @Str image
    @Int grade
    @Bool complete

    @belongsTo Course
  }
}

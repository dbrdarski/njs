export default function({
  Model, Uuid, Enum, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany
}){
  return @Model class Course {
    @Uuid({
      primaryKey : true
    }) id
    @Str title
    @Str slug
    @Text description
    @Str video
    @Str image
    @Enum({
      values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
      defaultValue: 'default'
    }) color
    @Enum({
      values: [ 'Beginner', 'Intermediate', 'Advanced' ],
      defaultValue: 'Beginner'
    }) level
    @Bool({
      defaultValue : false
    }) active

    @belongsTo({type: 'User'}) Author
    @hasMany Lession
  }
  // return db.define('course', {
  //   id : {
  //     type: Q.UUID,
  //     primaryKey: true,
  //     defaultValue : Q.UUIDV1
  //   },
  //   title : {
  //     type: Q.STRING
  //   },
  //   slug : {
  //     type: Q.STRING
  //   },
  //   description : {
  //     type: Q.TEXT
  //   },
  //   video : {
  //     type: Q.STRING
  //   },
  //   image : {
  //     type: Q.STRING
  //   },
  //   color : {
  //     type: Q.ENUM,
  //     values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
  //     defaultValue: 'default'
  //   },
  //   level : {
  //     type: Q.ENUM,
  //     values : [ 'Beginner', 'Intermediate', 'Advanced' ],
  //     defaultValue: 'Beginner'
  //   },
  //   active : {
  //     type : Q.BOOLEAN,
  //     defaultValue : false
  //   }
  // })
}

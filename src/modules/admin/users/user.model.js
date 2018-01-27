export default function({
  Model, Uuid, Enum, BinaryStr, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany, Scope
}){
  return @Model class User{
    @Uuid id
    @Str({
      unique: true
    }) username
    @Str({
      unique: true
    }) email
    @BinaryStr password
    @Str firstName
    @Str lastName
    @Str image
    @Text description
    @Int({
      defaultValue: 0
    }) state
    @Scope({
      attributes: {
        exclude: ['password']
      }
    }) default

    @hasMany({
      type: 'Course',
      foreignKey: 'authorId'
    }) Courses
    @belongsTo Role
  }

  // return db.define('user', {
  //   id : {
  //     type: Q.UUID,
  //     primaryKey: true,
  //     defaultValue: Q.UUIDV1
  //   },
  //   username : {
  //     type: Q.STRING,
  //     unique: true
  //   },
  //   email : {
  //     type: Q.STRING,
  //     unique: true
  //   },
  //   password : {
  //     type: Q.STRING.BINARY
  //   },
  //   firstName : {
  //     type: Q.STRING
  //   },
  //   lastName : {
  //     type: Q.STRING
  //   },
  //   image : {
  //     type: Q.STRING
  //   },
  //   description : {
  //     type: Q.TEXT
  //   },
  //   state : {
  //     type : Q.INTEGER,
  //     defaultValue : 0
  //   }
  // }, {
  //   defaultScope: {
  //     attributes: {
  //       exclude: ['password']
  //     }
  //   }
  // })
}

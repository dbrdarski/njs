export default function({Q, db}){
  return db.define('user', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    },
    username : {
      type: Q.STRING,
      unique: true
    },
    email : {
      type: Q.STRING,
      unique: true
    },
    password : {
      type: Q.STRING.BINARY
    },
    firstName : {
      type: Q.STRING
    },
    lastName : {
      type: Q.STRING
    },
    image : {
      type: Q.STRING
    },
    description : {
      type: Q.TEXT
    },
    state : {
      type : Q.INTEGER,
      defaultValue : 0
    }
  // }, {
  //   defaultScope: {
  //     where: {
  //       state: 1
  //     }
  //   }
  })
}

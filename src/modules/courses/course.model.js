export default function({Q, db}){
  return db.define('course', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue : Q.UUIDV1
    },
    title : {
      type: Q.STRING
    },
    slug : {
      type: Q.STRING
    },
    description : {
      type: Q.TEXT
    },
    video : {
      type: Q.STRING
    },
    image : {
      type: Q.STRING
    },
    color : {
      type: Q.ENUM,
      values: [ 'default', 'yellow', 'orange', 'red', 'violet', 'green', 'cyan', 'blue' ],
      defaultValue: 'default'
    },
    level : {
      type: Q.ENUM,
      values : [ 'Beginner', 'Intermediate', 'Advanced' ],
      defaultValue: 'Beginner'
    },
    active : {
      type : Q.BOOLEAN,
      defaultValue : false
    }
  })
}

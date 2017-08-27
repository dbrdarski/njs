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
    level : Q.INTEGER,
    color : Q.INTEGER,
    active : {
      type : Q.BOOLEAN,
      defaultValue : false
    }
  })
}

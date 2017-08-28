export default function({Q, db}){
  return db.define('lession', {
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
    grade : Q.INTEGER,
    complete : {
      type : Q.BOOLEAN
    }
  })
}

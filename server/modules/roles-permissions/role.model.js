export default function({Q, db}){
  return  db.define('role', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1,      
    },
    name : {
      type: Q.STRING,
      unique: true
    },
    description : {
      type: Q.STRING
    }
  })
}

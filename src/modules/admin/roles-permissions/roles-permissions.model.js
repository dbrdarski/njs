export default function({Q, db}){
  return db.define('role-permission', {
    id : {
      type: Q.UUID,
      primaryKey: true,
      defaultValue: Q.UUIDV1
    // },
    // roleId : {
    //   type: Q.UUID,
    //   allowNull: false
    // },
    // permissionId : {
    //   type: Q.UUID,
    //   allowNull: false
    }
  })
}

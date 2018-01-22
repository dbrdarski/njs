import seed from './permission.seed'
export default function PermissionCtrl({
    schemas: { Permission }
  }){
  // relations.Permission
  return {
    index : function($){
      Permission
        .findAll()
        .then(permissions => {
          $.data.message = 'Hello World!!!!'
          $.data.permissions = permissions
          $.json()
      })
    },
    new : function($){
      $.data.msg = $.query
      var permission = Permission.build($.query)
      permission.save()
      $.json()
    },
    install : function($){
      Permission.sync({force: true}).then(()=>{
        seed(Permission)
        $.data.msg = {installed: 'permissions table'}
        $.json()
      })
    }
  }
}

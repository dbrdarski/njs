export default function RoleCtrl({
    models: { Role },
  }){
  return {
    index : function($){
      Role
        .findAll()
        .then(roles => {
          $.data.message = 'Hello World!!!!'
          $.data.roles = roles
          $.json()
      })
    },
    new : function($){
      $.data.msg = $.query
      let role = Role.build($.query)
      role.save()
      $.json()
    },
    install : function($){
      Role.sync({force: true}).then(()=>{
        seed(Role)
        $.data.msg = {installed: 'roles table'}
        $.json()
      })

    }
  }
}

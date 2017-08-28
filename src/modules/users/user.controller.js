import seed from './user.seed'
export default function UserCtrl($$){
  this.relations.User
  let User = this.models.User

  return {
    index : function($){
      User
        .findAll()
        .then(users => {
          $.data.message = 'Hello World!!!!'
          $.data.users = users
          $.data.body = $.body
          $.json()
        })

    },
    new : function($){
      var user = User.build($.query)
      $.data.msg = $.query
      user.save()
      $.json()
    },
    install : function($){
      User.sync({force: true}).then(()=>{
        $.data.msg = {installed: 'users table'}
        seed($$)
        $.json()
      })
    }
  }
}

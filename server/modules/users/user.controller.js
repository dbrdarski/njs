import seed from './user.seed'
export default function UserCtrl({
  models : { User, Role }
}){
  this.relations.User
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
          seed(User, Role)
          $.json()
        })
    }
  }
}

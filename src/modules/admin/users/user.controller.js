export default function UserCtrl({
  models: { User }
}){
  return {
    index : function($){
      return User.findAll()
    },
    single : function($){
      return User.findOne({
        where : {
          username : $.params.username
        },
        include : [User.Courses]
      })
    },
    signin : function($){
          $.data.response = 'To Do!!!!!!'
          $.json()
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
        // seed($$)
        $.json()
      })
    }
  }
}

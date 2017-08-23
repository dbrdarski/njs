export default function LessionCtrl({ models: { Lession }}){
  return {
    index : function($){
      Lession
        .findAll()
        .then(lession => {
          $.data.message = 'Hello World!!!!'
          $.data.lession = lession
          $.data.body = $.body
          $.json()
      })
    },
    new : function($){
      var lession = Lession.build($.query)
      $.data.msg = $.query
      lession.save()
      $.json()
    },
    install : function($){
      Lession.sync({force: true})
      $.data.msg = {installed: 'lession table'}
      $.json()
    }
  }
}

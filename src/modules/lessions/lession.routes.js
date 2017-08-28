export default function( { server, controllers : { LessionCtrl }} ){
  server
    .get('/lessions', LessionCtrl.index)
    .get('/lession/new', LessionCtrl.new)
    .get('/lession/install', LessionCtrl.install)

    // server.get('/:page', function($){
    //     $.data.msg = $.params.page
    //     $.json()
    // })
}

export default function( { server, controllers :  { CourseCtrl }} ){
  server
    .get('/courses', CourseCtrl.index)
    .post('/courses', CourseCtrl.indexPost)
    .get('/course/new', CourseCtrl.new)
    /*=>  /course/new.get
          /course/new.post
          /course/new.put
    */



    .get('/course/install', CourseCtrl.install)

    // server.get('/:page', function($){
    //     $.data.msg = $.params.page
    //     $.json()
    // })
}

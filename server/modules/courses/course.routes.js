export default function( { server, controllers :  { CourseCtrl }} ){
    server
        .get('/courses', CourseCtrl.index)
        .get('/course/new', CourseCtrl.new)
        .get('/course/install', CourseCtrl.install)

    // server.get('/:page', function($){
    //     $.data.msg = $.params.page
    //     $.json()
    // })
}

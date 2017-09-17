export default function({
  server,
  attach,
  controllers :  { CourseCtrl }
}){
  attach('/courses', CourseCtrl.index)
  attach('/course/:slug', CourseCtrl.edit)

  server
    // .get('/courses/:id', CourseCtrl.show)
    // .delete('/courses/:id', CourseCtrl.delete)
    // .patch('/courses/:id', CourseCtrl.update)
    .get('/course/new', CourseCtrl.new)
    .get('/course/install', CourseCtrl.install)

    /*
    index   -> get      /items          [html]
    new     -> get      /items/new      [html]
    edit    -> get      /items/:slug    [html]
    index   -> post     /items          [json]
    show    -> post     /items/:slug    [json]
    create  -> put      /items/:slug    [json->create->(redirect)]
    update  -> patch    /items/:slug    [json->update]
    delete  -> delete   /items/:slug    [json->delete->(redirect(?))]
    */
}

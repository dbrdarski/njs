export default function({
    server,
    controllers : { UserCtrl }
  }){
  server
    .get('/users', UserCtrl.index)
    .get('/user/new', UserCtrl.new)
    .get('/user/install', UserCtrl.install)
}

export default function({ server, controllers : { RoleCtrl }}){
  server
    .get('/roles', RoleCtrl.index)
    .get('/role/new', RoleCtrl.new)
    .get('/role/install', RoleCtrl.install)
}

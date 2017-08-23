export default function({ server, controllers : {PermissionCtrl}}){
  server
    .get('/permissions', PermissionCtrl.index)
    .get('/permission/new', PermissionCtrl.new)
    .get('/permission/install', PermissionCtrl.install)
}

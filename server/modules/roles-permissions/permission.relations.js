export default function({models: { Role, Permission, RolePermission }}){
	Permission.Role = Permission.belongsToMany(Role, { through: RolePermission })
}

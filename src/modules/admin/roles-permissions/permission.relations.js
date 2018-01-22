export default function({schema: { Role, Permission, RolePermission }}){
	Permission.Role = Permission.belongsToMany(Role, { through: RolePermission })
}

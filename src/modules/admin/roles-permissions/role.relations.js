export default function({schemas: { Role, User, Permission, RolePermission }}){
	Role.Permission = Role.belongsToMany(Permission, { through: RolePermission })
	Role.User = Role.hasMany(User)
}

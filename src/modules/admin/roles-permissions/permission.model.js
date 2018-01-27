export default function({
  Model, Uuid, Enum, Str, Text, Bool, Int, BigInt, Float, Real, Dbl, Dec, hasOne, belongsTo, hasMany, belongsToMany
}){
	return @Model class Permission{
	  @Uuid id
	  @Str({
	    unique: true
	  }) name
	  @Str description

		@belongsToMany({
			through: 'RolePermission'
		}) Role
	}
}

// Permission.Role = Permission.belongsToMany(Role, { through: RolePermission })

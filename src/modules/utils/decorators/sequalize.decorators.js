export default function({ str, Q, db }, {
  removeEmptyKeys,
  propertyDecorator,
  emptyDecorator,
  dataType,
  relationType
}){

  const sequalizeClassAttributeDecorator = (target) => {
    return db.define(str.kebab(target.name), removeEmptyKeys(new target))
  }

  let sequalizeAttributeDecorator = (type, defaultValue ) => propertyDecorator(dataType(type, defaultValue))
  let sequalizeRelationDecorator = (type) => propertyDecorator(relationType(type))

  let sequelizeAttributeDecorators = {
    Model: sequalizeClassAttributeDecorator,
    Enum: sequalizeAttributeDecorator(Q.ENUM),
    Uuid: sequalizeAttributeDecorator(Q.UUID, {
      primaryKey: true,
      defaultValue : Q.UUIDV1
    }),
    Str: sequalizeAttributeDecorator(Q.STRING),
    BinaryStr: sequalizeAttributeDecorator(Q.STRING.BINARY),
    Text: sequalizeAttributeDecorator(Q.TEXT),
    Bool: sequalizeAttributeDecorator(Q.BOOLEAN),
    Int: sequalizeAttributeDecorator(Q.INTEGER),
    BigInt: sequalizeAttributeDecorator(Q.BIGINT),
    Float: sequalizeAttributeDecorator(Q.FLOAT),
    Real: sequalizeAttributeDecorator(Q.REAL),
    Dbl: sequalizeAttributeDecorator(Q.DOUBLE),
    Dec: sequalizeAttributeDecorator(Q.DECIMAL),
    hasOne: emptyDecorator,
    belongsTo: emptyDecorator,
    hasMany: emptyDecorator,
    belongsToMany: emptyDecorator,
    Scope: emptyDecorator
  }

  const sequelizeRelationshipDecorators = {
    // Model
    Model: x => new x,
    Enum: emptyDecorator,
    Uuid: emptyDecorator,
    Str: emptyDecorator,
    BinaryStr: emptyDecorator,
    Text: emptyDecorator,
    Bool: emptyDecorator,
    Int: emptyDecorator,
    BigInt: emptyDecorator,
    Float: emptyDecorator,
    Real: emptyDecorator,
    Dbl: emptyDecorator,
    Dec: emptyDecorator,
    hasOne: sequalizeRelationDecorator('hasOne'),
    belongsTo: sequalizeRelationDecorator('belongsTo'),
    hasMany: sequalizeRelationDecorator('hasMany'),
    belongsToMany: sequalizeRelationDecorator('belongsToMany'),
    Scope: emptyDecorator
  }

  return {
    sequelizeAttributeDecorators,
    sequelizeRelationshipDecorators
  }
}

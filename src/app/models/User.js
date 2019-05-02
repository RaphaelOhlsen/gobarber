module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    avatar: Datatypes.STRING,
    password_hash: Datatypes.BOOLEAN,
    provider: Datatypes.BOOLEAN
  })
  return User
}

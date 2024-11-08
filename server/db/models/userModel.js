const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  phone: {
    allowNull: false,
  type: DataTypes.STRING(15),
  unique: true,
  validate: {
    is: /^[0-9\-+() ]*$/
  }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  role:{
    allowNull :false,
    type: DataTypes.STRING,
    defaultValue: 'customer'

  },
}


class User extends Model {

  static associate(models){

      this.hasOne(models.Customer, {
        as:'customer',
        foreignKey: 'userId'
      })
  }


}
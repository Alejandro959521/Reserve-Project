const { Model, DataTypes, Sequelize } = require('sequelize');

const ROOM_TABLE = 'rooms';

const RoomSchema = {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

}

class Room extends Model {

  static associate(models) {

    // this.hasOne(models.Customer, {
    //   as:'customer',
    //   foreignKey: 'userId'
    // })
  }
  static config(sequelize) {

    return {
      sequelize,
      tableName: ROOM_TABLE,
      modelName: 'Room',
      timestamps: false

    }
  }

}

module.exports = { ROOM_TABLE, RoomSchema, Room }

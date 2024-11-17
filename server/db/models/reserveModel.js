const { Model, DataTypes, Sequelize } = require('sequelize');

const RESERVE_TABLE = 'reserves';
const {USER_TABLE} = require('./userModel');
const {ROOM_TABLE} = require('./reserveModel');


const ReserveSchema = {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false

  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: USER_TABLE,
      key: 'id'
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  roomId: {
    field: 'room_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: ROOM_TABLE,
      key: 'id'
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  totalPay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comentary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}

class Reserve extends Model {

  static associate(models) {

    this.belongsTo(models.User, {as:'user'});
    this.belongsTo(models.Room, {as:'room'});

  }
  static config(sequelize) {

    return {
      sequelize,
      tableName: RESERVE_TABLE,
      modelName: 'Reserve',
      timestamps: false

    }
  }

}

module.exports = { RESERVE_TABLE, ReserveSchema, Reserve }

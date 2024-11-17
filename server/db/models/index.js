const { User, UserSchema } = require('./userModel')
const { Room, RoomSchema } = require('./roomModel')
const { Reserve, ReserveSchema } = require('./reserveModel')


function setupModels(sequelize){

  User.init(UserSchema, User.config(sequelize));
  Room.init(RoomSchema, Room.config(sequelize));
  Reserve.init(ReserveSchema, Reserve.config(sequelize));

  User.associate(sequelize.models);
  Room.associate(sequelize.models);
  Reserve.associate(sequelize.models);



}


module.exports = setupModels;

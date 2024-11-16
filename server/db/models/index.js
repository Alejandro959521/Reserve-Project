const { User, UserSchema } = require('./userModel')
const { Room, RoomSchema } = require('./roomModel')


function setupModels(sequelize){

  User.init(UserSchema, User.config(sequelize));
  Room.init(RoomSchema, Room.config(sequelize));




}


module.exports = setupModels;

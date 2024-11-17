'use strict';

const { USER_TABLE, UserSchema } = require('./../models/userModel');
const { ROOM_TABLE, RoomSchema } = require('./../models/roomModel');
const { RESERVE_TABLE, ReserveSchema } = require('./../models/reserveModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ROOM_TABLE, RoomSchema);
    await queryInterface.createTable(RESERVE_TABLE, ReserveSchema);
  },

  async down (queryInterface) {

    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROOM_TABLE);
    await queryInterface.dropTable(RESERVE_TABLE);
  }
};

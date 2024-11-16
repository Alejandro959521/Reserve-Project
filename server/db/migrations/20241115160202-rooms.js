'use strict';

const { ROOM_TABLE, RoomSchema } = require('./../models/roomModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(ROOM_TABLE, RoomSchema);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(ROOM_TABLE);

  }
};

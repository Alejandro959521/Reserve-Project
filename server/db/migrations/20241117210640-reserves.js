'use strict';

const { RESERVE_TABLE, ReserveSchema } = require('./../models/reserveModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(RESERVE_TABLE, ReserveSchema);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(RESERVE_TABLE);

  }
};

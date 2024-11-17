'use strict';

const { RESERVE_TABLE, ReserveSchema } = require('./../models/reserveModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.addColumn(RESERVE_TABLE,'comentary',ReserveSchema.comentary );

  },

  async down (queryInterface) {

    await queryInterface.removeColumn(RESERVE_TABLE,'comentary');

  }
};

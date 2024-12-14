'use strict';

const { USER_TABLE, UserSchema  } = require('./../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(USER_TABLE, 'email', {
      ...UserSchema.email,
      unique: true,
    });


  },

  async down (queryInterface) {

    await queryInterface.changeColumn(USER_TABLE, 'email', {
      ...UserSchema.email,
      unique: false,
    });

  }
};

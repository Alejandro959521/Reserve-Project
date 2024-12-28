'use strict';
const { USER_TABLE, UserSchema  } = require('./../models/userModel');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hash = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        name: 'admin',
        email: 'admin@mail.com',
        password: hash,
        role: 'admin',
        phone:'343434343'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(USER_TABLE, {
      name: 'admin',
    });
  }
};

const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

const pool = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class UserServices {

  constructor() {


  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser
  }

  async find() {

    const client = await models.User.findAll();
    return client;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include:['reserves']
    });
    if (!user){
      throw boom.notFound('user not found')
    }
    return user

  }

  async update(id, changes) {

    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;

  }

  async delete(id) {

    const user = await this.findOne(id);
    await user.destroy();
    return {id};

  }

}

module.exports = UserServices;

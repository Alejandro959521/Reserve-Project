const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

const pool = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class ReserveServices {

  constructor() {


  }

  async generate(data) {

    return data

  }

  async create(data) {
    const newReserve = await models.User.create(data);
    return newReserve
  }



  async find() {

    const client = await models.User.findAll();
    return client;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
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

module.exports = ReserveServices;
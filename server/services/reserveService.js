const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

const pool = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class ReserveServices {

  constructor() {


  }

  async create(data) {
    const newReserve = await models.Reserve.create(data);
    return newReserve
  }

  async find() {

    const reserve = await models.Reserve.findAll(
      {
      include: ['user','room'],

    }
  );
    return reserve;
  }

  async findOne(id) {
    const reserve = await models.Reserve.findByPk(id,
      {
        include: ['user','room'],

      }
    );
    if (!reserve){
      throw boom.notFound('reserve not found')
    }
    return reserve

  }

  async update(id, changes) {

    const reserve = await this.findOne(id);
    const rta = await reserve.update(changes);
    return rta;

  }

  async delete(id) {

    const reserve = await this.findOne(id);
    await reserve.destroy();
    return {id};


  }


}

module.exports = ReserveServices;

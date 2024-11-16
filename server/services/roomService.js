const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

const pool = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class RoomServices {

  constructor() {

  }


  async create(data) {
    const newRoom = await models.Room.create(data);
    return newRoom
  }

  async find() {

    const room = await models.Room.findAll();
    return room;
  }

  async findOne(id) {
    const room = await models.Room.findByPk(id);
    if (!room){
      throw boom.notFound('user not found')
    }
    return room

  }

  async update(id, changes) {

    const room = await this.findOne(id);
    const rta = await room.update(changes);
    return rta;

  }

  async delete(id) {

    const room = await this.findOne(id);
    await room.destroy();
    return {id};

  }

}

module.exports = RoomServices;

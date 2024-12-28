const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');
const { Op } = require('sequelize');

const { models } = require('./../libs/sequelize')

class ReserveServices {

  async create(data) {
    const { startDate, endDate, roomId } = data;


    const existingReservations = await models.Reserve.findAll({
      where: {
        roomId,
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            endDate: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            [Op.and]: [
              {
                startDate: {
                  [Op.lte]: startDate,
                },
              },
              {
                endDate: {
                  [Op.gte]: endDate,
                },
              },
            ],
          },
        ],
      },
    });

    if (existingReservations.length > 0) {
      throw boom.conflict(
        'Las fechas de reserva ya están ocupadas para esta habitación.'
      );
    }

    const newReserve = await models.Reserve.create(data);
    return newReserve;
  }

  async find() {

    const reserves = await models.Reserve.findAll(
      {
      include: ['user','room'],

    }
  );
    return reserves;
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

     const { startDate, endDate, roomId } = changes;


    const currentReserve = await this.findOne(id);


    const overlappingReservations = await models.Reserve.findAll({
      where: {
        roomId: roomId || currentReserve.roomId,
        id: { [Op.ne]: id },
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            endDate: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            [Op.and]: [
              {
                startDate: {
                  [Op.lte]: startDate,
                },
              },
              {
                endDate: {
                  [Op.gte]: endDate,
                },
              },
            ],
          },
        ],
      },
    });

    if (overlappingReservations.length > 0) {
      throw boom.conflict(
        'Las fechas de reserva ya están ocupadas para esta habitación.'
      );
    }

    
    const reserve = await this.findOne(id);
    const updatedReserve = await reserve.update(changes);
    return updatedReserve;

  }

  async delete(id) {

    const reserve = await this.findOne(id);
    await reserve.destroy();
    return {id};


  }


}

module.exports = ReserveServices;

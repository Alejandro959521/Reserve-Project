const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');
const bcrypt = require('bcrypt');

const pool = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class UserServices {

  constructor() {


  }

  async create(data) {
    const hash =  await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser
  }

  async find() {

    const client = await models.User.findAll();
    return client;
  }

  async findByEmail(email) {

    const rta = await models.User.findOne({
      where:{ email }
    });
    return rta;
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

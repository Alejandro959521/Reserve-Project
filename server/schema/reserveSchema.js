const Joi = require('joi');

const id = Joi.number().integer();
const startDate = Joi.date();
const endDate = Joi.date();
const userId = Joi.number().integer();
const roomId = Joi.number().integer();
const totalPay = Joi.number().positive();
const comentary = Joi.string();

const createReserveSchema = Joi.object({
  startDate :startDate .required(),
  endDate: endDate.required(),
  userId: userId.required(),
  roomId: roomId.required(),
  totalPay: totalPay.required(),
  comentary:comentary
});

const updateReserveSchema = Joi.object({
  startDate: startDate,
  endDate: endDate,
  userId,
  roomId,
  totalPay: totalPay,
  comentary:comentary

});

const getReserveSchema = Joi.object({
  id: id.required(),
});

module.exports = { createReserveSchema, updateReserveSchema, getReserveSchema }

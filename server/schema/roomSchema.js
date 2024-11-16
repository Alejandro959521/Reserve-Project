const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(50);
const quantity = Joi.number().integer().min(0);
const price = Joi.number().positive();
const image =Joi.string().uri();
const description = Joi.string();

const createRoomSchema = Joi.object({
  price: price.required(),
  quantity: quantity.required(),
  name: name.required(),
  image: image.required(),
  description: description.required()
});

const updateRoomSchema = Joi.object({
  price: price,
  quantity: quantity,
  name: name,
  image: image,
  description: description

});

const getRoomSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRoomSchema, updateRoomSchema, getRoomSchema }

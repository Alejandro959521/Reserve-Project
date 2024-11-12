const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(5);
const name = Joi.string().min(2).max(50);
const phone =Joi.string().pattern(/^[0-9\-+() ]+$/).min(7).max(15);
const role = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  phone: phone.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  name: name,
  phone: phone,
  role: role

});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

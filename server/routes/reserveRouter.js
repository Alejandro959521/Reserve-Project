
const express = require('express');

const router = express.Router();

const ReserveServices = require('./../services/reserveService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createReserveSchema, updateReserveSchema, getReserveSchema } = require('./../schema/reserveSchema');


const service = new ReserveServices();

router.get("/", async (req, res, next) => {
  try {
    const reserves = await service.find();
    res.json(reserves);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getReserveSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const reserve = await service.findOne(id);
      res.json(reserve);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createReserveSchema,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newReserve = await service.create(body);
      res.status(201).json(newReserve);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getReserveSchema, 'params'),
  validatorHandler(updateReserveSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    res.json(rta);
  }
  catch(error) {
    next(error);
   }
  });

  router.delete('/:id',
    validatorHandler(getReserveSchema, 'params'),
    async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
    );


module.exports = router;

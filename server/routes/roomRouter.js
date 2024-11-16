
const express = require('express');

const router = express.Router();

const RoomServices = require('./../services/roomService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createRoomSchema, updateRoomSchema, getRoomSchema } = require('./../schema/roomSchema');


const service = new RoomServices();

router.get("/", async (req, res, next) => {
  try {
    const rooms = await service.find();
    res.json(rooms);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getRoomSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const room = await service.findOne(id);
      res.json(room);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createRoomSchema,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRoom = await service.create(body);
      res.status(201).json(newRoom);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getRoomSchema, 'params'),
  validatorHandler(updateRoomSchema, 'body'),
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
    validatorHandler(getRoomSchema, 'params'),
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

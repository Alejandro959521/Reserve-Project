const express = require('express');

const router = express.Router();

const UserServices = require('./../services/userService');
const validatorHandler = require('./../middlewares/validatorHandler');


const service = new UserServices();

router.get("/", async (req, res, next) => {
  try {

    const users = await service.find();
    res.json(users);

  } catch(error) {
next(error);

  }
  res.json({ fruits: ["hola","adios"] });
});


router.post('/', async (req, res) => {
const body = req.body;
res.status(201).res.json({
    message: 'created',
    data: body
 });
});

router.patch('/:id',  async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  }
  catch(error) {
    res.status(404).json({
      message:error.message
    })
   }
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
     });
    });


module.exports = router;

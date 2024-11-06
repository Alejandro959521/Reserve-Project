const express = require('express');

const router = express.Router();

const UserServices = require('./../services/userService');
const service = new UserServices();

router.get("/", (req, res) => {
  res.json({ fruits: ["hola","adios"] });
});


router.post('/', (req, res) => {
const body = req.body;
res.status(201).res.json({
    message: 'created',
    data: body
 });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
      message: 'update',
      data: body,
      id
   });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
     });
    });


module.exports = router;

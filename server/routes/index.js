
const express = require('express');
const userRouter = require('./userRouter');
const roomRouter = require('./roomRouter');

function routerApi(app) {
const router = express.Router();

  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/rooms', roomRouter);

}

module.exports = routerApi;

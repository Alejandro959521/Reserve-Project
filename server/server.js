const express = require("express");
const routerApi = require('./routes')
const { checkApiKey } = require('./middlewares/authHandler')

const app = express();
const cors = require("cors");

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');


const port = process.env.PORT || 3000;

app.use(express.json());
const whitelist = ['http://localhost:8082', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE","OPTIONS"],
};
app.use(cors(options));


routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
require('./utils/auth');

app.listen(port, () => {
    console.log("servidor en el puerto 8082");
});




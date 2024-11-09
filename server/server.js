const express = require("express");
const routerApi = require('./routes')

const app = express();
const cors = require("cors");

app.use(express.json());
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const corsOpt = {
    origin: ["http://localhost:5173/"],
};

app.use(cors(corsOpt));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(8082, () => {
    console.log("servidor en el puerto 8082");
});




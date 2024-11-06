const express = require("express");
const routerApi = require('./routes')

const app = express();
const cors = require("cors");

app.use(express.json());


const corsOpt = {
    origin: ["http://localhost:5173/"],
};

app.use(cors(corsOpt));





app.listen(8082, () => {
    console.log("servidor en el puerto 8082");
});


routerApi(app);

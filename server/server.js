const express = require("express");
const app = express();
const cors = require("cors");
const corsOpt = {
    origin: ["http://localhost:5173/"],
};

app.use(cors(corsOpt));

app.get("/api",(req, res) => {
    res.json({ fruits: ["hola","adios"] });
});


app.listen(8082, () => {
    console.log("servidor en el puerto 8082");
});
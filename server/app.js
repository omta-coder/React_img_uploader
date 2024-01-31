require("dotenv").config();
const express = require("express");
const app = express();
const router = require('./routes/router');
const port = 8000;
const cors = require("cors");
require('./db/conn');

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/uploads",express.static("./uploads"));

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})
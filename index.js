"use strict";
require("dotenv").config();
import express from "express";
import api_route from "./controller";
import db from "./models";
const app = express();
const port = process.env.PORT;

app.use("/", api_route);
app.listen(port, () => {
    console.log("server started at http://localhost:" + port);
});
"use strict";
require("dotenv").config();
import express from "express";
import controller from "./controller";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", controller);
app.listen(port, () => {
    console.log("server started at http://localhost:" + port);
});
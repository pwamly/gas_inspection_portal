"use strict";
require("dotenv").config();
import express from "express";
import controller from "./controller";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import refreshtoken from "./auth/refreshtoken";
import cors from "cors";
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", controller);
app.post("/refresh_token", refreshtoken);
app.listen(port, () => {
    console.log("server started at http://localhost:" + port);
});
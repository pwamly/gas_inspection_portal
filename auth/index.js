"use strict";

import { Router } from "express";
require("dotenv").config();
import db from "../models";
import register from "./register";
import login from "./login";
import refreshtoken from "./refreshtoken";
const auth_route = Router();

auth_route.post("/login", login);
auth_route.post("/register", register);
auth_route.post("/token", refreshtoken);
auth_route.post("/reset-password", (req, res) => {
    console.log("reset");
});

module.exports = auth_route;
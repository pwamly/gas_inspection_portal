"use strict";

import { Router } from "express";
require("dotenv").config();
const auth_route = Router();

auth_route.post("/login", () => {
    console.log("login");
});
auth_route.post("/register", () => {
    console.log("register");
});

auth_route.post("/reset-password", () => {
    console.log("reset");
});
module.exports = auth_route;
"use strict";

import { Router } from "express";
import isAdmin from "../middleware/isAdmin";
import isAuth from "../middleware/isAuth";
import users from "../routes/users";
const api = Router();

api.use("/user", isAdmin, () => {
    console.log("user");
});
api.use("/users", isAdmin, users);

module.exports = api;
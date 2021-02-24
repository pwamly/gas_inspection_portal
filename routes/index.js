"use strict";

import { Router } from "express";
import isAdmin from "../middleware/isAdmin";
import isAuth from "../middleware/isAuth";
import profile from "./profile";
import user from "./user";
const api = Router();

api.use("/profile", isAuth, profile);
api.use("/users", isAdmin, user);

module.exports = api;
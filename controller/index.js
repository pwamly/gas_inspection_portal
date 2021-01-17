"use strict";
import { Router } from "express";
import auth_route from "../auth";
import isAuth from "../middleware/isAuth";
import routes from "../routes/index";

const controller = Router();

controller.use("/auth", auth_route);
controller.use("/api", isAuth, routes);

module.exports = controller;
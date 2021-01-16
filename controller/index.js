"use strict";
import { Router } from "express";
import auth_route from "../auth";

const controller = Router();

controller.use("/auth", auth_route);

module.exports = controller;
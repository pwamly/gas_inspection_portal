"use strict";
import { Router } from "express";
import auth_route from "../auth";

const api_route = Router();

api_route.use("/auth", auth_route);

module.exports = api_route;
"use strict";

import { Router } from "express";
require("dotenv").config();
import db from "../models";
import isAdmin from "../middleware/isAdmin";
import register from "./register";
import login from "./login";
import revokeRefreshToken from "./revokeRefreshToken";

const auth_route = Router();
auth_route.post("/login", login);
auth_route.post("/register", register);
auth_route.post("/revokeAccount", isAdmin, revokeRefreshToken);
auth_route.post("/reset-password", revokeRefreshToken);

module.exports = auth_route;
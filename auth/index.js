"use strict";

import { Router } from "express";
require("dotenv").config();
import db from "../models";
import isAdmin from "../middleware/isAdmin";
import register from "./register";
import login from "./login";
import logout from "./logout";
import revokeRefreshToken from "./revokeRefreshToken";
import resetPassword from "./resetPassword";
import forgotPassword from "./forgotPassword";

const auth_route = Router();
auth_route.post("/login", login);
auth_route.post("/logout", logout);
auth_route.post("/register", register);
auth_route.post("/revokeAccount", isAdmin, revokeRefreshToken);
auth_route.post("/forgot-password", forgotPassword);
auth_route.post("/reset-password", resetPassword);

module.exports = auth_route;
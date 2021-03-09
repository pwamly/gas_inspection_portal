"use strict";

import { Router } from "express";
import isAdmin from "../middleware/auth/isAdmin";
import isAuth from "../middleware/auth/isAuth";
import profile from "./profile";
import users from "./users";
import actions from "./actions";
import reports from "./reports";
import paginator from "../middleware/reports/paginator";
const api = Router();

api.use("/profile", profile);
api.use("/team", isAdmin, users);
api.use("/profile", users);
api.use("/reports", reports);
api.use("/inspect", users);
api.use("/actions", actions);
module.exports = api;
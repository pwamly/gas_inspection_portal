"use strict";

import { Router } from "express";
import getUsers from "./user";
import paginator from "../../middleware/reports/paginator";
const user = Router();

user.get("/", paginator, getUsers);

user.delete("/", () => {
    console.log("delete users users");
});

module.exports = user;
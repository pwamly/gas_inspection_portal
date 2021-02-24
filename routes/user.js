"use strict";

import { Router } from "express";

const user = Router();

user.get("/", () => {
    console.log("get all users");
});
user.delete("/", () => {
    console.log("delete users users");
});

module.exports = user;
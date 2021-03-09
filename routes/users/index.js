"use strict";

import { Router } from "express";

const user = Router();

user.post("/", () => {
    console.log("post all users");
});

user.delete("/", () => {
    console.log("delete users users");
});

module.exports = user;
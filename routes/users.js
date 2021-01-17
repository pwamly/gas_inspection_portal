"use strict";

import { Router } from "express";

const users = Router();

users.get("/", () => {
    console.log("get all users");
});
users.delete("/", () => {
    console.log("delete users users");
});

module.exports = users;
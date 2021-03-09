"use strict";

import { Router } from "express";
import { nb_user } from "../../models";
import editvehicle from "./editvehicle";
import register from "./register";
const action = Router();

action.post("/registervehicle", register);
action.put("/editvehicle/:id", editvehicle);
action.delete("/deletevehicle/:id", async(req, res) => {
    res.json({});
});

action.post("/bulkdeletevehicle/", async(req, res) => {
    res.json({});
});

module.exports = action;
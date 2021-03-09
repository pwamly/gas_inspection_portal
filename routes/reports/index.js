"use strict";

import { Router } from "express";
import { nb_user } from "../../models";
import allreports from "./allreports";
import isAdmin from "../../middleware/auth/isAdmin";
import reportByid from "./reportByid";
import inspectReport from "./inspectreport";
import paginator from "../../middleware/reports/paginator";

const reports = Router();

reports.get("/", paginator, allreports);
reports.put("/:id", reportByid);
reports.get("/inspect", paginator, inspectReport);
reports.delete("/deletevehicle/:id", async(req, res) => {
    res.json({});
});

reports.post("/bulkdeletevehicle/", async(req, res) => {
    res.json({});
});

module.exports = reports;
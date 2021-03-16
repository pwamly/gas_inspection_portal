"use strict";

import { Router } from "express";
import { vehiclereports } from "../../models";
import allreports from "./allreports";
import isAdmin from "../../middleware/auth/isAdmin";
import reportByid from "./reportByid";
import inspectReport from "./inspectreport";
import paginator from "../../middleware/reports/paginator";

const reports = Router();

reports.get("/", paginator, allreports);
reports.put("/:id", reportByid);
reports.get("/inspect", paginator, inspectReport);
reports.delete("/deletevehicle/:id", isAdmin, async(req, res) => {
    const { id } = req.params;
    try {
        const response = await vehiclereports.destroy({ where: { id } });
        if (response == 1) {
            return res.json({
                successful: true,
                message: "Report Deleted!",
            });
        }
        return res.status(403).json({
            successful: false,
            message: "Alredy deleted!",
        });
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            successful: false,
            message: "Failed!",
        });
    }
});

module.exports = reports;
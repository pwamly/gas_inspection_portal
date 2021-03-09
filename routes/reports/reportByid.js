"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
const { Model, Op, json } = require("sequelize");

module.exports = async(req, res) => {
    try {
        const reports = await vehiclereports.findAll({ where: { vihecleRegno } });
        if (reports) {
            console.log("success");
            return res.json(reports);
        }
    } catch (error) {
        console.groupEnd("errr from select single", error);
    }

    return;
};
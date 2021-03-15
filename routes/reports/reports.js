"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
const { Model, Op, json } = require("sequelize");

module.exports = async function allreports(req, res) {
    try {
        const reports = await vehiclereports.findAll();

        if (reports) {
            console.log("success");
            return res.json(reports);
        }
    } catch (error) {
        console.groupEnd("errr from select all", error);
    }

    return;
};
module.exports = async function reportById(req, res) {
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

module.exports = async function inspect(req, res) {
    const { q, pageInfo } = req.query;
    const { sortBy, sortOrder } = pageInfo;
    if (q) {
        where = {
            ...where,
            [Op.or]: {
                addressBook: {
                    [Op.like]: "%" + q + "%",
                },
                description: {
                    [Op.like]: "%" + q + "%",
                },
            },
        };

        try {
            const { rows, count } = await vehiclereports.findAndCountAll({
                order: [
                    [sortBy, sortOrder]
                ],
                where,
            });
            response = rows;
            count1 = count;
        } catch (error) {}

        return;
    }
};
// module.exports = { allreports, reportById, inspect };
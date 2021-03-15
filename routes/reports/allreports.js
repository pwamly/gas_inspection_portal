"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
import paginate from "../../afterwares/pagenate";
const { Model, Op, json } = require("sequelize");

module.exports = async(req, res) => {
    let where = {
        createdAt: {
            [Op.gte]: new Date(),
        },
    };

    const { q, pageInfo } = req.query;
    const { sortBy, sortOrder, page, limit } = pageInfo;
    try {
        if (q) {
            where = {
                ...where,
                [Op.or]: {
                    vihecleRegno: {
                        [Op.like]: "%" + q + "%",
                    },
                    phone: {
                        [Op.like]: "%" + q + "%",
                    },
                },
            };

            const { rows, count } = await vehiclereports.findAndCountAll({
                order: [
                    [sortBy, sortOrder]
                ],
                where,
                raw: true,
            });

            const data = paginate({
                totalCount: count,
                currentPage: page,
                pageSize: limit,
                data: rows,
            });

            return res.json(data);
        } else {
            const { rows, count } = await vehiclereports.findAndCountAll({
                order: [
                    [sortBy, sortOrder]
                ],
                raw: true,
            });
            if (rows) {
                const data = paginate({
                    totalCount: count,
                    currentPage: page,
                    pageSize: limit,
                    data: rows,
                });
                return res.json(data);
            }
        }
    } catch (error) {
        console.log("error", error);
    }
};
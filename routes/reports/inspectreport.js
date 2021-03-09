"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
const { Model, Op, json } = require("sequelize");
import paginate from "../../afterwares/pagenate";

module.exports = async(req, res) => {
    let where = {};
    const { q, pageInfo } = req.query;
    const { sortBy, sortOrder, page, limit } = pageInfo;
    if (q) {
        console.log("ttttttttttttttttttttttt", q);

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

        try {
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
        } catch (error) {
            console.log("zzzzzzzzzzzzzzzzzzzzzz", error);
        }

        return;
    }
};
// module.exports = { allreports, reportById, inspect };
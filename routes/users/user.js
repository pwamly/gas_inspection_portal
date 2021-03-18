"use strict";

import { v4 as uuidv4 } from "uuid";
import { nb_user } from "../../models/";
import paginate from "../../afterwares/pagenate";
const { Model, Op, json } = require("sequelize");

module.exports = async(req, res) => {
    const { q, pageInfo } = req.query;
    const { sortBy, sortOrder, page, limit } = pageInfo;
    try {
        const { rows, count } = await nb_user.findAndCountAll({
            attributes: [
                "first_name",
                "last_name",
                "username",
                "email",
                "userRole",
                "phone",
            ],
            order: [
                [sortBy, sortOrder]
            ],

            raw: true,
        });
        const data = paginate({
            totalCount: count,
            currentPage: page,
            pageSize: limit,
            data: rows,
        });

        if (rows) {
            return res.json(data);
        }
    } catch (error) {
        console.log("error", error);
    }
};
"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports, nb_user } from "../../models";
import paginate from "../../afterwares/pagenate";
const { Model, Op, json } = require("sequelize");
import moment from "moment";

module.exports = async(req, res) => {
    let where = {};

    const { q, day, status } = req.query;
    const team = await nb_user.findAll();

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
                    name: {
                        [Op.like]: "%" + q + "%",
                    },
                    location: {
                        [Op.like]: "%" + q + "%",
                    },
                    cylinderSerialNo1: {
                        [Op.like]: "%" + q + "%",
                    },
                    cylinderSerialNo2: {
                        [Op.like]: "%" + q + "%",
                    },
                    cylinderSerialNo3: {
                        [Op.like]: "%" + q + "%",
                    },
                },
            };
            //console.log(new Date().toISOString().slice(0, 19).replace("T", " "));
            const { rows, count } = await vehiclereports.findAndCountAll({
                where,
                logging: console.log,
                raw: true,
            });
            if (rows) {
                return res.json(count);
            }
        } else {
            if (day == "day") {
                where = {
                    ...where,
                    createdAt: {
                        [Op.gte]: moment().subtract(1, "days").toDate(),
                    },
                };
            }
            if (day == "week") {
                where = {
                    ...where,
                    createdAt: {
                        [Op.gte]: moment().subtract(7, "days").toDate(),
                    },
                };
            }

            if (day == "month") {
                where = {
                    ...where,
                    createdAt: {
                        [Op.gte]: moment().subtract(30, "days").toDate(),
                    },
                };
            }

            if (status == "expired") {
                where = {
                    ...where,
                    validto: {
                        [Op.lt]: new Date(),
                    },
                };
            }
            if (status == "notexpired") {
                where = {
                    ...where,
                    validto: {
                        [Op.gt]: new Date(),
                    },
                };
            }

            if (Object.keys(where).length !== 0) {
                const { rows, count } = await vehiclereports.findAndCountAll({
                    where,
                    logging: console.log,
                    raw: true,
                });
                if (rows) {
                    return res.json(count);
                }
                return;
            }
            const { rows, count } = await vehiclereports.findAndCountAll({
                logging: console.log,
                raw: true,
            });

            if (rows) {
                return res.json(count);
            }
        }
    } catch (error) {
        console.log("error", error);
    }
};
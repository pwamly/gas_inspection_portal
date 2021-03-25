"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports, nb_user } from "../../models";
import paginate from "../../afterwares/pagenate";
const { Model, Op } = require("sequelize");
import moment from "moment";

module.exports = async(req, res) => {
    let where = {};

    const { q, pageInfo, day, status } = req.query;
    const { sortBy, sortOrder, page, limit, offset } = pageInfo;
    const team = await nb_user.findAll();

    const isValidDate = (strDate) => {
        let myDatestr = new Date(strDate);
        if (!isNaN(myDatestr.getMonth())) {
            return true;
        }
        return false;
    };

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
            const { total, count: Tcount } = await vehiclereports.findAndCountAll({
                where,
                logging: console.log,
                raw: true,
            });

            const { rows, count } = await vehiclereports.findAndCountAll({
                order: [
                    [sortBy, sortOrder]
                ],
                where,
                logging: console.log,
                raw: true,
            });
            if (rows) {
                if (team) {
                    let newdata = rows.map((el) => {
                        team.forEach((it) => {
                            if (el.inspectorID === it.id) {
                                return (el.inspectorID = it.first_name);
                            }
                        });
                        return el;
                    });

                    //... beautify dates..
                    newdata.map((el) => {
                        if (isValidDate(el.cexpiryDate1) == true) {
                            el.cexpiryDate1 = new Date(el.cexpiryDate1)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cexpiryDate2) == true) {
                            el.cexpiryDate2 = new Date(el.cexpiryDate2)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cexpiryDate3) == true) {
                            el.cexpiryDate3 = new Date(el.cexpiryDate3)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate1) == true) {
                            el.cmanufacturedDate1 = new Date(el.cmanufacturedDate1)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate2) == true) {
                            el.cmanufacturedDate2 = new Date(el.cmanufacturedDate2)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate3) == true) {
                            el.cmanufacturedDate3 = new Date(el.cmanufacturedDate3)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }

                        if (isValidDate(el.createdAt) == true) {
                            el.createdAt = new Date(el.createdAt)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.updatedAt) == true) {
                            el.updatedAt = new Date(el.updatedAt)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }

                        return el;
                    });

                    let data = paginate({
                        totalCount: count,
                        currentPage: page,
                        pageSize: limit,
                        data: newdata,
                    });
                    data = {...data, total: Tcount };
                    return res.json(data);
                }
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
                const { total, count: Tcount } = await vehiclereports.findAndCountAll({
                    where,
                    logging: console.log,
                    raw: true,
                });
                const { rows, count } = await vehiclereports.findAndCountAll({
                    order: [
                        [sortBy, sortOrder]
                    ],
                    where,
                    logging: console.log,
                    raw: true,
                });
                if (rows) {
                    if (team) {
                        let newdata = rows.map((el) => {
                            team.forEach((it) => {
                                if (el.inspectorID === it.id) {
                                    return (el.inspectorID = it.first_name);
                                }
                            });
                            return el;
                        });
                        newdata.map((el) => {
                            if (isValidDate(el.cexpiryDate1) == true) {
                                el.cexpiryDate1 = new Date(el.cexpiryDate1)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.cexpiryDate2) == true) {
                                el.cexpiryDate2 = new Date(el.cexpiryDate2)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.cexpiryDate3) == true) {
                                el.cexpiryDate3 = new Date(el.cexpiryDate3)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.cmanufacturedDate1) == true) {
                                el.cmanufacturedDate1 = new Date(el.cmanufacturedDate1)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.cmanufacturedDate2) == true) {
                                el.cmanufacturedDate2 = new Date(el.cmanufacturedDate2)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.cmanufacturedDate3) == true) {
                                el.cmanufacturedDate3 = new Date(el.cmanufacturedDate3)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.validto) == true) {
                                el.validto = new Date(el.validto)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.validfrom) == true) {
                                el.validfrom = new Date(el.validfrom)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.createdAt) == true) {
                                el.createdAt = new Date(el.createdAt)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }
                            if (isValidDate(el.updatedAt) == true) {
                                el.updatedAt = new Date(el.updatedAt)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace("T", " ");
                            }

                            return el;
                        });

                        let data = paginate({
                            totalCount: count,
                            currentPage: page,
                            pageSize: limit,
                            data: newdata,
                        });
                        data = {...data, total: Tcount };
                        return res.json(data);
                    }
                }
                return;
            }
            const { total, count: Tcount } = await vehiclereports.findAndCountAll({
                logging: console.log,
                raw: true,
            });
            const { rows, count } = await vehiclereports.findAndCountAll({
                logging: console.log,
                offset,
                limit,
                order: [
                    [sortBy, sortOrder]
                ],
                raw: true,
            });

            if (rows) {
                if (team) {
                    let newdata = rows.map((el) => {
                        team.forEach((it) => {
                            if (el.inspectorID === it.id) {
                                return (el.inspectorID = it.first_name);
                            }
                        });
                        return el;
                    });
                    newdata.map((el) => {
                        if (isValidDate(el.cexpiryDate1) == true) {
                            el.cexpiryDate1 = new Date(el.cexpiryDate1)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cexpiryDate2) == true) {
                            el.cexpiryDate2 = new Date(el.cexpiryDate2)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cexpiryDate3) == true) {
                            el.cexpiryDate3 = new Date(el.cexpiryDate3)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate1) == true) {
                            el.cmanufacturedDate1 = new Date(el.cmanufacturedDate1)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate2) == true) {
                            el.cmanufacturedDate2 = new Date(el.cmanufacturedDate2)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.cmanufacturedDate3) == true) {
                            el.cmanufacturedDate3 = new Date(el.cmanufacturedDate3)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.validto) == true) {
                            el.validto = new Date(el.validto)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.validfrom) == true) {
                            el.validfrom = new Date(el.validfrom)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }
                        if (isValidDate(el.createdAt) == true) {
                            el.createdAt = new Date(el.createdAt)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }

                        if (isValidDate(el.updatedAt) == true) {
                            el.updatedAt = new Date(el.updatedAt)
                                .toISOString()
                                .slice(0, 10)
                                .replace("T", " ");
                        }

                        return el;
                    });

                    let data = paginate({
                        totalCount: count,
                        currentPage: page,
                        pageSize: limit,
                        data: newdata,
                    });
                    data = {...data, total: Tcount };
                    return res.json(data);
                }
            }
        }
    } catch (error) {
        console.log("error", error);
    }
};
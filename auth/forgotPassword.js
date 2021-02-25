"use strict";
import db from "../models";
const { nb_user } = db;
const { Model, Op } = require("sequelize");
import { sign } from "jsonwebtoken";

module.exports = async(req, res) => {
    const { email, phone } = req.body;
    if (email) {
        try {
            // check if user exist
            const user = await nb_user.findOne({
                where: {
                    [Op.or]: [{ email }],
                },
                raw: true,
            });
            if (user) {
                // generate recovery code
                const code = Math.floor(1000 + Math.random() * 9000);

                // save it into token

                const recoveryCode = sign({ code }, process.env.RECOVERY_SECRETE, {
                    expiresIn: "15m",
                });

                // save code to db
                try {
                    const savedcode = await nb_user.update({ recoveryCode }, {
                        where: { email },
                    });
                    console.log("is it successful", savedcode);
                    // sendback generated code
                    return res.status(200).json({ code });
                } catch (error) {
                    console.log("error on saving code", error);
                }
            } else {
                return res
                    .status(404)
                    .json({ data: { message: "Account not found!" } });
            }
        } catch (error) {
            console.log(error);
        }
    }
};
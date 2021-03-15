"use strict";

const Op = require("sequelize").Op;
import { v4 as uuidv4 } from "uuid";
import { nb_user } from "../models";

module.exports = async(req, res) => {
    try {
        const {
            firstname: first_name,
            lastname: last_name,
            email,
            username,
            password,
            phone,
            signature,
        } = req.body;

        const bodyPayload = {
            id: uuidv4(),
            first_name,
            last_name,
            email,
            username,
            password,
            phone,
            signature,
            userRole: "user",
        };

        const [user, created] = await nb_user.findOrCreate({
            where: {
                [Op.or]: { username, email },
            },
            defaults: bodyPayload,
        });
        if (created) {
            console.log("user created");
            return res.json({ success: created });
        }
        if (user) {
            console.log("user already exist", user);
            return res.status(417).json({ data: { message: "user already exist" } });
        }
        return res.json({ success: created });
    } catch (error) {
        console.log("error", error);
    }
};
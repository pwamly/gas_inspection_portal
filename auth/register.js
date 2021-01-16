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
        } = req.body;
        const bodyPayload = {
            id: uuidv4(),
            first_name,
            last_name,
            email,
            username,
            password,
        };

        const [user, created] = await nb_user.findOrCreate({
            where: {
                [Op.or]: { username, email },
            },
            defaults: bodyPayload,
        });

        return res.json({ success: created });
    } catch (error) {
        console.log("erro", error);
    }
};
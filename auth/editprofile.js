"use strict";

const Op = require("sequelize").Op;
import { v4 as uuidv4 } from "uuid";
import { nb_user } from "../models";

module.exports = async(req, res) => {
    console.log("ggggggggggggggggggg");
    const { id } = req.payload;
    try {
        const {
            firstname: first_name,
            lastname: last_name,
            email,
            username,
            phone,
        } = req.body;
        const bodyPayload = {
            first_name,
            last_name,
            email,
            username,
            phone,
        };

        const updated = await nb_user.update({...bodyPayload }, { where: { id } });

        if (updated == 1) {
            console.log("user created", updated, id);
            return res.json({ success: true });
        }

        return res.json({ success: false });
    } catch (error) {
        console.log("error", error);
    }
};
"use strict";

import { nb_user } from "../models";
import {} from "./revokeRefreshToken";
import { verify } from "jsonwebtoken";
module.exports = async(req, res) => {
    const { token } = req.body;
    try {
        const payload = verify(token, process.env.ACCESSTOKEN_SECRETE);
        const { id } = payload;

        let { token_version } = await nb_user.findOne({ where: { id: id } });
        const user = await nb_user.update({ token_version: token_version + 1 }, { where: { id: id } });
        if (user) {
            return res.status(200).json({ successful: true });
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({ successful: false });
    }
};
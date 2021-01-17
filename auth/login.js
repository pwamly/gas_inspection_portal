"use strict";

import { nb_user } from "../models";

module.exports = async(req, res) => {
    try {
        const { username, password } = req.body;
        const Token = await nb_user.validateAndGet(username, password);
        const { accessToken } = Token;
        return res.json({ success: true, accessToken });
    } catch (error) {}
};
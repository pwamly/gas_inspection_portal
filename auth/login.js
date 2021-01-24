"use strict";

import { nb_user } from "../models";

module.exports = async(req, res) => {
    try {
        const { username, password } = req.body;
        const Token = await nb_user.validateAndGet(username, password);
        const { access_token, refresh_token } = Token;
        res.cookie("jto", refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
        });
        return res.json({ success: true, accessToken: access_token });
    } catch (error) {}
};
"use strict";

import { nb_user } from "../models";
import sendRefreshToken from "./sendRefreshToken";

module.exports = async(req, res) => {
    try {
        const { username, password } = req.body;
        const Token = await nb_user.validateAndGet(username, password);
        const { access_token, refresh_token } = Token;
        sendRefreshToken(res, refresh_token);

        return res.json({ success: true, accessToken: access_token });
    } catch (error) {
        return res.status(401).json({ successful: false });
    }
};
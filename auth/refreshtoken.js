"use strict";

require("dotenv").config();
import { nb_user } from "../models";
import { verify } from "jsonwebtoken";
import createAcessToken from "./createAcessToken";
import createRereshToken from "../auth/createRefreshToken";
import sendRefreshToken from "./sendRefreshToken";
import db from "../models";

module.exports = async(req, res) => {
    const { jto: token } = req.cookies;

    if (!token) {
        console.log("refresh token not sent from cookies");
        res.statusMessage = "NO TOKEN";
        return res.status(401).json({ successful: false, AccessToken: "" });
    }
    let payload = null;
    try {
        payload = verify(token, process.env.REFRESHTOKEN_SECRETE);
    } catch (error) {
        console.log(error);
        if (error)
            return res.status(401).json({ successful: false, AccessToken: "" });
    }

    const user = await nb_user.findOne({ where: { id: payload.id } });

    if (!user) {
        console.log("token not exist in db");
        return res.status(401).json({ successful: false, AccessToken: "" });
    }

    if (user.token_version !== payload.token_version) {
        console.log(
            "token version not match",
            user.token_version,
            payload.token_version
        );
        return res.status(401).json({ successful: false, AccessToken: "" });
    }

    const { id, first_name, last_name, username, email, token_version } = user;
    const profile = { id, first_name, last_name, username, email };

    sendRefreshToken(res, await createRereshToken({ id, token_version }, db));

    return res
        .status(200)
        .json({ successful: true, AccessToken: createAcessToken(profile) });
};
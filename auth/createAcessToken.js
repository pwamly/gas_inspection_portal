"use strict";
import { sign, verify } from "jsonwebtoken";

module.exports = (profile) => {
    const access_token = sign(profile, process.env.ACCESSTOKEN_SECRETE, {
        expiresIn: "1m",
    });
    return access_token;
};
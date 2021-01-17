"use strict";

require("dotenv").config();
import { nb_user } from "../models";
import { sign, verify } from "jsonwebtoken";

module.exports = (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            res.statusMessage = "NO TOKEN";
            return res.status(401).json({ data: { message: "NO TOKEN" } });
        }
        verify(token, process.env.REFRESHTOKEN_SECRETE, (error, user) => {
            if (error) {
                res.statusMessage = "INVALID TOKEN";
                return res.status(403).json({ data: { message: "INVALID TOKEN" } });
            }
            const { id, first_name, last_name, username, email } = user;
            const profile = { id, first_name, last_name, username, email };
            nb_user
                .findOne({ attributes: ["refresh_token"], where: { id: user.id } })
                .then((refreshtoken) => {
                    if (!refreshtoken) {
                        res.statusMessage = "NO TOKEN LOGIN AGAIN";
                        return res
                            .status(403)
                            .json({ data: { message: "NO TOKEN LOGIN AGAIN" } });
                    }
                    if (!refreshtoken == token) {
                        res.statusMessage = "WROMG TOKEN";
                        return res.status(401).json({ data: { message: "WROMG TOKEN" } });
                    }
                    const access_token = sign(profile, process.env.ACCESSTOKEN_SECRETE, {
                        expiresIn: "1m",
                    });

                    return res.json({ accessToken: access_token });
                });
        });
    } catch (error) {
        console.log("erro", error);
    }
};
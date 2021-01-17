"use strict";
require("dotenv").config();
const { verify } = require("jsonwebtoken");
import { nb_user } from "../models";

module.exports = async(req, res, next) => {
    const auHeader = req.headers["authorization"];
    const token = auHeader && auHeader.split(" ")[1];
    if (!token) {
        res.statusMessage = "No Authorization Header";
        return res
            .status(401)
            .json({ data: { message: "No Authorization Header" } });
    }

    verify(token, process.env.ACCESSTOKEN_SECRETE, (error, user) => {
        console.log("users", error);
        if (error) {
            res.statusMessage = "NOT HAVE ACCESS!";
            return res.status(403).json({ data: { message: "NOT HAVE ACCESS!" } });
        }

        next();
    });
};
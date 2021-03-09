"use strict";
import db from "../models";
const { nb_user } = db;
const { verify } = require("jsonwebtoken");
import { hash } from "bcrypt";

module.exports = async(req, res) => {
    const { email, code, newpassword: password } = req.body;
    console.log(email);
    if (email && code && password) {
        // check if user code is valid for that email or mobile no
        const rcode = await nb_user.findOne({
            where: { email },
            raw: true,
        });
        const { recoveryCode } = rcode;

        var payload = verify(
            recoveryCode,
            process.env.RECOVERY_SECRETE,
            (error, dbcode) => {
                if (error) {
                    const { name } = error;
                    console.log("error from code ver..........", name);
                    if (name == "TokenExpiredError") {
                        return res.status(401).json({ message: "Your code has expired" });
                    }
                    return res.status(401).json({ data: { successful: false } });
                }

                if (dbcode) {
                    const { code: dcode } = dbcode;
                    if (dcode == code) {
                        // encrypt pass
                        hash(password, 12, (err, encrypted) => {
                            if (err) return;

                            const savePassword = nb_user.update({ password: encrypted }, {
                                where: { email },
                            });
                            if (savePassword) {
                                console.log("saved..", savePassword);
                                return res.status(200).json({ message: "password updated" });
                            }
                        });
                    } else {
                        console.log("codes", dcode, code);
                        return res.status(401).json({ message: "Incorrect code!" });
                    }
                }
            }
        );
    } else {
        return res.status(403).json({
            successful: false,
            message: "missing email or code or password",
        });
    }
};
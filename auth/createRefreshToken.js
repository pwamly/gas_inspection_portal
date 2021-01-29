"use strict";

import { sign } from "jsonwebtoken";

module.exports = async(credetentials, db) => {
    const { id } = credetentials;
    const nb_user = db.nb_user || db;

    const refresh_token = sign({...credetentials },
        process.env.REFRESHTOKEN_SECRETE, {
            expiresIn: "7d",
        }
    );
    try {
        const tokensaved = await nb_user.update({ refresh_token }, {
            where: { id: id },
        });
        if (tokensaved) {
            return refresh_token;
        }
    } catch (error) {
        console.log(error);
    }
    return refresh_token;
};